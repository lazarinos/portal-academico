import { SiteHeader } from "@/components/site-header";
import { CertificateSection } from "@/components/sections/certificate-section";
import { ConveniosSection } from "@/components/sections/convenios-section";
import { CourseShowcase } from "@/components/sections/course-showcase";
import { DocumentCenter } from "@/components/sections/document-center";
import { EnrollmentSection } from "@/components/sections/enrollment-section";
import { EvaluationSection } from "@/components/sections/evaluation-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StudentRecords } from "@/components/sections/student-records";
import { VideoLibrary } from "@/components/sections/video-library";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <SiteHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:py-16">
        <HeroSection />
        <MissionSection />
        <DocumentCenter />
        <CourseShowcase />
        <ConveniosSection />
        <GallerySection />
        <CertificateSection />
        <EnrollmentSection />
        <ServicesSection />
        <StudentRecords />
        <VideoLibrary />
        <EvaluationSection />
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Instituto Tecnológico Productivo Regional. Todos los
            derechos reservados.
          </p>
          <p>Actualizado automáticamente con normativa MINEDU y SINEACE.</p>
        </div>
      </footer>
    </div>
  );
}
