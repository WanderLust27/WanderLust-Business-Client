import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

export default function FAQSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Fre</span>
            <span className="text-purple-400">quently</span>
            <br />
            <span className="text-purple-500">Ask </span>
            <span className="text-gray-900">Questions</span>
          </h2>
          <p className="text-gray-600">
            At SwiftPay, we want to ensure that our platform meets all of your HR and payroll needs.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border rounded-lg mb-4 px-4 py-2 border-gray-200">
            <AccordionTrigger className="text-left font-medium">
              How does SwiftPay help automate payroll?
            </AccordionTrigger>
            <AccordionContent>
              SwiftPay simplifies payroll processing by automating salary calculations, tax deductions, and direct
              deposits. Our system handles all the complex calculations, ensuring accurate and timely payments to your
              employees.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg mb-4 px-4 py-2 border-gray-200">
            <AccordionTrigger className="text-left font-medium">
              Can SwiftPay handle benefits management?
            </AccordionTrigger>
            <AccordionContent>
              Yes, SwiftPay offers comprehensive benefits management solutions. Our platform allows you to administer
              health insurance, retirement plans, paid time off, and other benefits seamlessly. Employees can easily
              enroll in benefits and make changes through our user-friendly portal.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg mb-4 px-4 py-2 border-gray-200">
            <AccordionTrigger className="text-left font-medium">
              How does SwiftPay help automate payroll?
            </AccordionTrigger>
            <AccordionContent>
              SwiftPay simplifies payroll processing by automating salary calculations, tax deductions, and direct
              deposits. Our system handles all the complex calculations, ensuring accurate and timely payments to your
              employees.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg mb-4 px-4 py-2 border-gray-200">
            <AccordionTrigger className="text-left font-medium">
              What customer support options are available?
            </AccordionTrigger>
            <AccordionContent>
              SwiftPay provides multiple support channels including phone, email, and live chat. Our dedicated support
              team is available during business hours to assist with any questions or issues. Premium plans include a
              dedicated customer success manager for personalized support.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg mb-4 px-4 py-2 border-gray-200">
            <AccordionTrigger className="text-left font-medium">How does SwiftPay ensure compliance?</AccordionTrigger>
            <AccordionContent>
              SwiftPay stays up-to-date with changing tax laws and regulations at federal, state, and local levels. Our
              system automatically applies the correct tax rates and filing requirements, helping your business remain
              compliant. We also provide regular updates and notifications about regulatory changes that may affect your
              business.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
