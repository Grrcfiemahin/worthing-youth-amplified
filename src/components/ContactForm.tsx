import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface ContactFormProps {
  type: 'youth' | 'organisation';
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ type, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: type === 'youth' ? '' : undefined,
    organisation: type === 'organisation' ? '' : undefined,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get existing submissions from localStorage
      const existingSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
      
      // Create new submission
      const newSubmission = {
        id: Date.now().toString(),
        type,
        ...formData,
        timestamp: new Date().toISOString(),
      };

      // Add to submissions
      const updatedSubmissions = [newSubmission, ...existingSubmissions];
      localStorage.setItem('formSubmissions', JSON.stringify(updatedSubmissions));

      toast({
        title: "Form Submitted!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });

      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md p-6 relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute right-2 top-2"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="mb-6">
          <h2 className="section-heading mb-2">
            {type === 'youth' ? 'Join Our Community' : 'Partner With Us'}
          </h2>
          <p className="text-muted-foreground">
            {type === 'youth' 
              ? 'Ready to make your voice heard in Worthing?' 
              : 'Looking to collaborate with young voices?'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {type === 'youth' && (
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                min="13"
                max="30"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                required
              />
            </div>
          )}

          {type === 'organisation' && (
            <div>
              <Label htmlFor="organisation">Organisation Name</Label>
              <Input
                id="organisation"
                value={formData.organisation}
                onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                required
              />
            </div>
          )}

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={type === 'youth' 
                ? 'Tell us what issues matter most to you and how you want to get involved...' 
                : 'Tell us about your organisation and how you\'d like to work with young people...'
              }
              required
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1 btn-primary">
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;