"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { toast } from "sonner";

const StepOneSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone is required"),
});

const StepTwoSchema = z.object({
  city: z.string().min(2, "City is required"),
  service: z.string().min(2, "Choose a service"),
  details: z.string().min(10, "Add a short description (10+ chars)"),
});

const FormSchema = StepOneSchema.and(StepTwoSchema);
type FormValues = z.infer<typeof FormSchema>;

export function QuoteForm(): JSX.Element {
  const [step, setStep] = React.useState<1 | 2>(1);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed to submit");
      toast.success("Quote request sent. We'll get back shortly.");
    } catch (e) {
      toast.error("There was an issue sending your request.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[720px] mx-auto bg-white/5 border border-white/10 rounded-lg p-5 sm:p-6"
    >
      {step === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm mb-1">Full name</label>
            <input
              className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
              placeholder="Jane Doe"
              {...register("name")}
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
              placeholder="you@example.com"
              {...register("email")}
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
              placeholder="(904) 555‑0123"
              {...register("phone")}
            />
            {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>}
          </div>
          <div className="sm:col-span-2 mt-2">
            <Button type="button" onClick={() => setStep(2)}>
              Next
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">City</label>
            <input
              className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
              placeholder="St. Augustine"
              {...register("city")}
            />
            {errors.city && <p className="text-xs text-red-400 mt-1">{errors.city.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Service</label>
            <select
              className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
              defaultValue=""
              {...register("service")}
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="cosmetic-remodeling">Cosmetic Remodeling & Repair</option>
              <option value="planning">Project Planning & Consulting</option>
              <option value="sourcing">Material Sourcing & Bundling</option>
              <option value="trade">Trade & Barter Facilitation</option>
              <option value="logistics">Logistics & Project Management</option>
            </select>
            {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service.message}</p>}
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm mb-1">Project details</label>
            <textarea
              rows={4}
              className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
              placeholder="Briefly describe your project and timeline goals..."
              {...register("details")}
            />
            {errors.details && <p className="text-xs text-red-400 mt-1">{errors.details.message}</p>}
          </div>
          <div className="sm:col-span-2 mt-2 flex gap-3">
            <Button type="button" variant="outline" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}


