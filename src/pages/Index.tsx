import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Handshake, Target, Heart, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-parliament-worthing.jpg";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [showForm, setShowForm] = useState<'youth' | 'organisation' | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Contact Form Modal */}
      {showForm && (
        <ContactForm 
          type={showForm} 
          onClose={() => setShowForm(null)} 
        />
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="gradient-hero text-white">
          <div className="section-container py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="hero-text text-white">
                    Amplify Youth
                  </h1>
                  <p className="text-xl md:text-2xl font-light text-white/90">
                    Worthing
                  </p>
                </div>
                <div className="space-y-6">
                  <h2 className="section-heading text-white/95">
                    Empowering young voices. Driving real change.
                  </h2>
                  <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                    We believe that young people should have a seat at the table when decisions are made in Worthing. 
                    Our mission is to listen, represent, and empower the next generation.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="btn-hero"
                    onClick={() => setShowForm('youth')}
                  >
                    Get Involved <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Young people engaging in parliamentary democracy with Worthing seafront in the background"
                  className="rounded-2xl shadow-strong w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-heading text-foreground mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating meaningful opportunities for young people to shape their community and future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-feature text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="subheading text-foreground mb-4">Youth Representation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating a platform where young people can share their views on issues that matter most.
              </p>
            </Card>

            <Card className="card-feature text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-8 w-8 text-accent" />
              </div>
              <h3 className="subheading text-foreground mb-4">Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Working with councils, schools, and local organisations to shape policies and projects.
              </p>
            </Card>

            <Card className="card-feature text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="subheading text-foreground mb-4">Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Developing skills, leadership, and confidence through workshops, forums, and campaigns.
              </p>
            </Card>

            <Card className="card-feature text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="subheading text-foreground mb-4">Community Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Making Worthing a better place for young people today and tomorrow.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Amplify Youth Section */}
      <section className="py-20 bg-primary-lighter/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-heading text-foreground mb-8">Why Amplify Youth?</h2>
            <div className="space-y-8">
              <p className="text-xl text-foreground font-semibold">
                Because your voice matters.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every decision made about young people should include young people. 
                At Amplify Youth, we're here to make sure that happens.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-medium">
                <blockquote className="text-lg italic text-foreground">
                  "Young people are not just the leaders of tomorrow – they are the changemakers of today. 
                  Their perspectives, energy, and innovation are essential for creating a community that works for everyone."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 gradient-accent text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-heading text-white mb-8">Get Involved</h2>
            <p className="text-lg text-white/90 mb-12 leading-relaxed">
              Whether you're a young person who wants to make a difference, or an organisation 
              looking to work with youth voices, we'd love to hear from you.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="card-feature bg-white/10 border-white/20">
                <h3 className="subheading text-white mb-4">For Young People</h3>
                <p className="text-white/80 mb-6">
                  Join our community of young changemakers and help shape Worthing's future.
                </p>
                <Button 
                  className="bg-white text-accent hover:bg-white/90"
                  onClick={() => setShowForm('youth')}
                >
                  Join Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>

              <Card className="card-feature bg-white/10 border-white/20">
                <h3 className="subheading text-white mb-4">For Organisations</h3>
                <p className="text-white/80 mb-6">
                  Partner with us to ensure young voices are heard in your decision-making.
                </p>
                <Button 
                  className="bg-white text-secondary hover:bg-white/90"
                  onClick={() => setShowForm('organisation')}
                >
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="subheading text-white mb-6">Contact Us</h3>
              <div className="grid md:grid-cols-2 gap-6 text-white/90">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>you@amplifyyouth.org</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span>Worthing, West Sussex</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="section-container">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Amplify Youth – Worthing</h3>
            <p className="text-primary-foreground/80">
              Empowering young voices. Driving real change.
            </p>
            <div className="mt-8 pt-8 border-t border-primary-light/30">
              <p className="text-sm text-primary-foreground/60">
                © 2024 Amplify Youth Worthing. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;