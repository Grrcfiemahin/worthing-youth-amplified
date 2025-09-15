import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Handshake, Target, Heart, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-parliament-worthing.jpg";
import logo from "@/assets/logo.png";
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

      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-10 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-6xl font-black text-primary bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
                AY
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">Amplify Youth</h1>
                <p className="text-sm text-white/80 italic">For youth, from youth</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

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
                    For youth, from youth. Real voices, real change.
                  </h2>
                  <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                    Young people aren't just the future – we're the present. Our voices deserve to be heard, 
                    our ideas deserve space, and our communities deserve our energy. We're here to make it happen.
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
            <h2 className="section-heading text-foreground mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another youth group - we're a movement for real change in our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-feature text-center group hover:bg-primary/5 transition-all duration-300">
              <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="subheading text-foreground mb-4">Your Voice Counts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real young people, real opinions. We're creating spaces where what you think actually matters.
              </p>
            </Card>

            <Card className="card-feature text-center group hover:bg-secondary/5 transition-all duration-300">
              <div className="bg-gradient-to-br from-secondary to-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Handshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="subheading text-foreground mb-4">Direct Action</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't just talk - we take action. Working with decision-makers to create real change.
              </p>
            </Card>

            <Card className="card-feature text-center group hover:bg-accent/5 transition-all duration-300">
              <div className="bg-gradient-to-br from-accent to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="subheading text-foreground mb-4">Skills & Power</h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn how to campaign, speak up, and lead. Build the skills to change your world.
              </p>
            </Card>

            <Card className="card-feature text-center group hover:bg-primary/5 transition-all duration-300">
              <div className="bg-gradient-to-br from-primary/80 to-accent/80 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="subheading text-foreground mb-4">Community Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Making Worthing work for young people. Real change starts with us.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-heading text-foreground mb-8">Why Join the Movement?</h2>
            <div className="space-y-8">
              <p className="text-xl text-foreground font-semibold">
                Because change doesn't happen by waiting for adults to listen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're done with being told "you'll understand when you're older." 
                The climate crisis, housing costs, mental health - these affect us NOW. So we're acting NOW.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-medium border border-primary/20">
                <blockquote className="text-lg italic text-foreground">
                  "At 15, I started Amplify Youth because I was tired of adults making decisions about our future 
                  without including us. We're not the leaders of tomorrow - we're the changemakers of today."
                </blockquote>
                <p className="text-sm text-primary font-semibold mt-4">- Founder, Amplify Youth</p>
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
                  <span>you@amplifyyouth.uk</span>
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