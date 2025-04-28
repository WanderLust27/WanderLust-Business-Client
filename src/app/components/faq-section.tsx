import { ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

export default function FAQSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">Fre</span>
              <span className="text-[hsl(var(--foreground))]">quently</span>
              <br />
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">Ask </span>
              <span className="text-[hsl(var(--foreground))]">Questions</span>
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] text-lg">
              At SwiftPay, we want to ensure that our platform meets all your HR and.
            </p>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-2xl px-6 py-4 border-[hsl(var(--border))]">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium">How does SwiftPay help automate payroll?</span>
                    <ChevronDown className="h-5 w-5 text-[hsl(var(--muted-foreground))] transform transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-[hsl(var(--muted-foreground))]">
                  SwiftPay simplifies payroll processing by automating salary calculations, tax deductions, and direct deposits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-2xl px-6 py-4 border-[hsl(var(--border))]">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium">Can SwiftPay handle benefits management?</span>
                    <ChevronDown className="h-5 w-5 text-[hsl(var(--muted-foreground))] transform transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-[hsl(var(--muted-foreground))]">
                  Yes, SwiftPay provides comprehensive benefits management solutions including health insurance, retirement plans, and more.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-2xl px-6 py-4 border-[hsl(var(--border))]">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium">How does SwiftPay help automate payroll?</span>
                    <ChevronDown className="h-5 w-5 text-[hsl(var(--muted-foreground))] transform transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-[hsl(var(--muted-foreground))]">
                  Our automated system handles all aspects of payroll processing, ensuring accuracy and compliance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-2xl px-6 py-4 border-[hsl(var(--border))]">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium">What customer support options are available?</span>
                    <ChevronDown className="h-5 w-5 text-[hsl(var(--muted-foreground))] transform transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-[hsl(var(--muted-foreground))]">
                  We offer 24/7 customer support through multiple channels including phone, email, and live chat.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-2xl px-6 py-4 border-[hsl(var(--border))]">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium">How does SwiftPay ensure compliance?</span>
                    <ChevronDown className="h-5 w-5 text-[hsl(var(--muted-foreground))] transform transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-[hsl(var(--muted-foreground))]">
                  We maintain up-to-date compliance with all relevant regulations and automatically apply updates as needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
