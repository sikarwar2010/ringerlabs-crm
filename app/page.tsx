import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, Building2, Users, BarChart3, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";


export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold">CRM Pro</span>
          </div>
          <div className="flex items-center space-x-4">
            {userId ? (
              <UserButton />
            ) : (
              <div className="space-x-2">
                <Link href="/sign-in" className="text-sm font-medium hover:underline">
                  Sign In
                </Link>
                <Link href="/sign-up">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </div>
            )}
            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
            Manage Your Customer Relationships Like Never Before
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A powerful, multi-tenant CRM system designed for modern businesses. Get your own subdomain, manage your
            team, and grow your customer relationships with advanced analytics and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                Sign In to Your CRM
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Everything You Need to Grow Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Building2 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Multi-Tenant Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get your own subdomain and completely isolated data for your organization.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Team Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Invite team members with role-based access control and permissions.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Track your sales pipeline with Kanban boards and detailed reporting.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Bank-level security with data encryption and compliance standards.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Why Choose CRM Pro?</h2>
          <div className="space-y-6">
            {[
              "Complete lead and opportunity management with Kanban boards",
              "Rich text editor for emails and task management",
              "Priority-based workflow management and automation",
              "Real-time collaboration with your team members",
              "Comprehensive reporting and analytics dashboard",
              "Custom subdomain for your organization (e.g., yourcompany.ringerlabs.com)",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using CRM Pro to manage their customer relationships.
          </p>
          <Link href="/sign-up">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Started Now - Its Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 CRM Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
