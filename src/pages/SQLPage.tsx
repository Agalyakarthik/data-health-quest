import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Download, BookOpen, ExternalLink, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import healthcareLogo from "@/assets/healthcare-logo.png";

const SQLPage = () => {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--sql-bg-start))] to-[hsl(var(--sql-bg-end))]">
      {/* Header */}
      <header className="border-b border-[hsl(var(--sql-border))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={healthcareLogo} 
                alt="Healthcare Analysis HQ" 
                className="h-10 w-10"
              />
              <div>
                <h1 className="text-lg font-bold text-[hsl(var(--sql-text-primary))]">
                  Healthcare Analysis HQ
                </h1>
              </div>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="border-[hsl(var(--sql-border))] text-[hsl(var(--sql-text-primary))] hover:bg-[hsl(var(--sql-card-bg))]">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--sql-accent-start))] to-[hsl(var(--sql-accent-end))] bg-clip-text text-transparent">
            Health care Analysis HQ (HAQ)
          </h1>
          <p className="text-xl text-[hsl(var(--sql-text-muted))] max-w-3xl mx-auto">
            Enhance your medical knowledge with our daily curated questions from real clinical datasets. 
            Subscribe to receive queries at 9 AM and answers at 8 PM.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Today's Query */}
          <div className="lg:col-span-2">
            <Card className="bg-[hsl(var(--sql-card-bg))] border-[hsl(var(--sql-border))] border-t-4 border-t-[hsl(var(--sql-accent-start))]">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--sql-text-primary))] mb-6">
                  Today's Medical Query
                </h2>
                
                <Tabs defaultValue="question" className="w-full">
                  <TabsList className="bg-[hsl(var(--sql-bg-start))] border border-[hsl(var(--sql-border))]">
                    <TabsTrigger 
                      value="question"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(var(--sql-accent-start))] data-[state=active]:to-[hsl(var(--sql-accent-end))] data-[state=active]:text-white"
                    >
                      Question
                    </TabsTrigger>
                    <TabsTrigger 
                      value="answer"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(var(--sql-accent-start))] data-[state=active]:to-[hsl(var(--sql-accent-end))] data-[state=active]:text-white"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Expert Analysis & Answer
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="question" className="mt-6">
                    <div className="bg-[hsl(var(--sql-bg-start))] rounded-lg p-6 mb-4">
                      <Textarea
                        placeholder="Today's SQL question will appear here..."
                        className="min-h-[150px] bg-transparent border-[hsl(var(--sql-border))] text-[hsl(var(--sql-text-primary))] placeholder:text-[hsl(var(--sql-text-muted))]"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="answer" className="mt-6">
                    <div className="bg-[hsl(var(--sql-bg-start))] rounded-lg p-6 border border-[hsl(var(--sql-border))]">
                      <p className="text-[hsl(var(--sql-text-muted))]">
                        The detailed answer and clinical explanation will be revealed here at 8:00 PM daily.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Daily Delivery Card */}
            <Card className="bg-[hsl(var(--sql-card-bg))] border-[hsl(var(--sql-border))]">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="w-5 h-5 text-[hsl(var(--sql-accent-start))]" />
                  <h3 className="text-xl font-bold text-[hsl(var(--sql-text-primary))]">
                    Daily Delivery
                  </h3>
                </div>
                <p className="text-sm text-[hsl(var(--sql-text-muted))] mb-4">
                  Get the query at 9 AM and the answer at 8 PM delivered to your inbox!
                </p>
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="your.email@hospital.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[hsl(var(--sql-bg-start))] border-[hsl(var(--sql-border))] text-[hsl(var(--sql-text-primary))] placeholder:text-[hsl(var(--sql-text-muted))]"
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[hsl(var(--sql-accent-start))] to-[hsl(var(--sql-accent-end))] hover:opacity-90 text-white border-0"
                  >
                    Start My Daily Learning
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Clinical Dataset Card */}
            <Card className="bg-[hsl(var(--sql-card-bg))] border-[hsl(var(--sql-border))]">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-5 h-5 text-[hsl(var(--sql-accent-start))]" />
                  <h3 className="text-xl font-bold text-[hsl(var(--sql-text-primary))]">
                    Clinical Dataset
                  </h3>
                </div>
                <p className="text-sm text-[hsl(var(--sql-text-muted))] mb-4">
                  Access the complete medical database for advanced analysis
                </p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full border-[hsl(var(--sql-border))] text-[hsl(var(--sql-text-primary))] hover:bg-[hsl(var(--sql-bg-start))] justify-start"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Dataset
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-[hsl(var(--sql-border))] text-[hsl(var(--sql-text-primary))] hover:bg-[hsl(var(--sql-bg-start))] justify-start"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Setup Guide
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-[hsl(var(--sql-border))] text-[hsl(var(--sql-text-primary))] hover:bg-[hsl(var(--sql-bg-start))] justify-start"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    PhysioNet Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-[hsl(var(--sql-text-muted))] text-sm max-w-3xl mx-auto">
            This platform provides daily medical queries sourced from clinical datasets to help healthcare 
            professionals and students enhance their diagnostic and analytical skills.
          </p>
          <p className="text-[hsl(var(--sql-text-muted))] text-sm mt-4">
            Data sourced from{" "}
            <a 
              href="https://physionet.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[hsl(var(--sql-accent-start))] hover:underline"
            >
              PhysioNet
            </a>
            {" "}– A repository of freely-available medical research data
          </p>
        </div>
      </div>
    </div>
  );
};

export default SQLPage;
