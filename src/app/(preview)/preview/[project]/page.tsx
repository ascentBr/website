import { notFound } from "next/navigation";
import { projectRegistry } from "@/projects/registry";
import { Metadata } from "next";

interface PreviewPageProps {
  params: {
    project: string;
  };
}
export const metadata: Metadata = {
  title: "Ascent - Preview de Projetos",
  description: "Transforme seu negócio com estratégias digitais de alta performance.",
    robots: {
    index: false,
    follow: false,
  },
};

export default async function PreviewPage({
  params,
}: PreviewPageProps) {
  const { project } = await params;

  const ProjectComponent =
    projectRegistry[project as keyof typeof projectRegistry];

  if (!ProjectComponent) {
    notFound();
  }

  return <ProjectComponent />;
}