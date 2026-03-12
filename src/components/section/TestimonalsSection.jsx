import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "In the Marsync project, he integrated our complex C# APIs with React so seamlessly that we never encountered any performance issues on the frontend. He is exceptionally strong in both teamwork and technical problem-solving.",
      author: "Hamida",
      role: "Backend Developer",
      project: "Marsync",
    },
    {
      id: 2,
      text: "Fitting complex medical data and financial reports into such a clean and intuitive UI is no easy task. His focus on component reusability significantly accelerated our development process.",
      author: "Project Manager",
      role: "Product Owner",
      project: "Mecuri",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-zinc-900 dark:border-zinc-800 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight flex items-center justify-center gap-3">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-zinc-950 dark:border-zinc-800 p-8 rounded-3xl border border-slate-200 shadow-sm relative"
            >
              <Quote
                size={40}
                className="text-indigo-100 dark:text-slate-600 absolute top-6 left-6 -z-0"
              />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 pt-6 ">
                  <div>
                    <h4 className="text-slate-900 dark:text-slate-200 font-bold">
                      {testimonial.author}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-indigo-50 dark:bg-zinc-900 text-[#05CC05] text-xs font-semibold rounded-full">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
