import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Eye, Trash2, LogOut, Users, Building } from "lucide-react";

interface FormSubmission {
  id: string;
  type: 'youth' | 'organisation';
  name: string;
  email: string;
  age?: string;
  organisation?: string;
  message: string;
  timestamp: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadSubmissions();
    }
  }, []);

  const loadSubmissions = () => {
    const stored = localStorage.getItem('formSubmissions');
    if (stored) {
      setSubmissions(JSON.parse(stored));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'freddie09+') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuthenticated', 'true');
      loadSubmissions();
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuthenticated');
    setPassword('');
    setSubmissions([]);
    setSelectedSubmission(null);
  };

  const deleteSubmission = (id: string) => {
    const updatedSubmissions = submissions.filter(sub => sub.id !== id);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('formSubmissions', JSON.stringify(updatedSubmissions));
    setSelectedSubmission(null);
    toast({
      title: "Submission Deleted",
      description: "The submission has been removed",
    });
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-UK', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="section-heading mb-2">Admin Access</h1>
            <p className="text-muted-foreground">Enter password to access the dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full btn-primary">
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="section-heading">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage form submissions from Amplify Youth</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Submissions List */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="subheading">Submissions ({submissions.length})</h2>
              </div>

              {submissions.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No submissions yet</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {submissions.map((submission) => (
                    <div
                      key={submission.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-muted/50 ${
                        selectedSubmission?.id === submission.id ? 'bg-primary/5 border-primary' : ''
                      }`}
                      onClick={() => setSelectedSubmission(submission)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={submission.type === 'youth' ? 'default' : 'secondary'}>
                          {submission.type === 'youth' ? (
                            <><Users className="h-3 w-3 mr-1" /> Youth</>
                          ) : (
                            <><Building className="h-3 w-3 mr-1" /> Organisation</>
                          )}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-sm">{submission.name}</h3>
                      <p className="text-xs text-muted-foreground">{submission.email}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDate(submission.timestamp)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>

          {/* Submission Details */}
          <div className="lg:col-span-2">
            {selectedSubmission ? (
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Badge variant={selectedSubmission.type === 'youth' ? 'default' : 'secondary'}>
                      {selectedSubmission.type === 'youth' ? (
                        <><Users className="h-3 w-3 mr-1" /> Youth Submission</>
                      ) : (
                        <><Building className="h-3 w-3 mr-1" /> Organisation Submission</>
                      )}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(selectedSubmission.timestamp)}
                    </span>
                  </div>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => deleteSubmission(selectedSubmission.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-semibold text-muted-foreground">Name</Label>
                      <p className="text-lg">{selectedSubmission.name}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-muted-foreground">Email</Label>
                      <p className="text-lg">{selectedSubmission.email}</p>
                    </div>
                  </div>

                  {selectedSubmission.age && (
                    <div>
                      <Label className="text-sm font-semibold text-muted-foreground">Age</Label>
                      <p className="text-lg">{selectedSubmission.age}</p>
                    </div>
                  )}

                  {selectedSubmission.organisation && (
                    <div>
                      <Label className="text-sm font-semibold text-muted-foreground">Organisation</Label>
                      <p className="text-lg">{selectedSubmission.organisation}</p>
                    </div>
                  )}

                  <div>
                    <Label className="text-sm font-semibold text-muted-foreground">Message</Label>
                    <div className="bg-muted/50 p-4 rounded-lg mt-2">
                      <p className="whitespace-pre-wrap">{selectedSubmission.message}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="p-12 text-center">
                <Eye className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="subheading mb-2">Select a Submission</h3>
                <p className="text-muted-foreground">
                  Choose a submission from the list to view details
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;