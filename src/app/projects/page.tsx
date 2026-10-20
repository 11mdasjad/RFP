"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useData } from "@/context/DataContext";
import { ProjectCard, PROJECTS_DATA } from "@/data/imagineContent";
import { VideoModal } from "@/components/modals/VideoModal";
import { ProjectModal } from "@/components/modals/ProjectModal";
import {
  Play,
  ArrowUpRight,
  ArrowLeft,
  X,
  Sparkles,
  Film,
  Megaphone,
  Video,
  Share2,
  Layers,
  LayoutGrid,
} from "lucide-react";

type FilterCategory = "all" | "ai" | "film" | "campaign" | "documentary" | "marketing";

interface CategoryMeta {
  id: FilterCategory;
  label: string;
  icon: React.ElementType;
  description: string;
  badgeColor: string;
}

const CATEGORIES: CategoryMeta[] = [
  {
    id: "all",
    label: "All Projects",
    icon: LayoutGrid,
    description: "Explore our complete body of work spanning thousands of productions.",
    badgeColor: "bg-white/[0.08] text-white border-white/20",
  },
  {
    id: "ai",
    label: "AI Video Production",
    icon: Sparkles,
    description: "Next-gen generative AI filmmaking, photorealistic 3D CGI, and high-velocity vertical cinema.",
    badgeColor: "bg-[#6b54ee]/20 text-[#a89bfa] border-[#6b54ee]/40",
  },
  {
    id: "film",
    label: "Corporate Films",
    icon: Film,
    description: "High-production brand cinema, corporate anthems, and premier campus films.",
    badgeColor: "bg-[#D4AF37]/20 text-[#F3E5AB] border-[#D4AF37]/40",
  },
  {
    id: "campaign",
    label: "Election Campaigns",
    icon: Megaphone,
    description: "Constituency-wide mobile LED display vans, campaign documentaries, and election war rooms.",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  },
  {
    id: "documentary",
    label: "Documentary Films",
    icon: Video,
    description: "Academic heritage, clinical research, civic infrastructure, and cultural storytelling.",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  },
  {
    id: "marketing",
    label: "Social & Marketing",
    icon: Share2,
    description: "Episodic vertical cinema, viral short-form narratives, and digital performance creative.",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
  },
];

export default function ProjectsPage() {
  const { projects: contextProjects } = useData();
  const allProjects = contextProjects && contextProjects.length > 0 ? contextProjects : PROJECTS_DATA;

  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  // Lightbox & Case Study Modals
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoUrl?: string;
    title?: string;
    subtitle?: string;
    youtubeUrl?: string;
  }>({
    isOpen: false,
    videoUrl: "",
    title: "",
    subtitle: "",
  });

  const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(null);

  const handleOpenVideo = (
    url = "https://www.youtube.com/watch?v=QvlClFaXJLc",
    title = "Showreel",
    subtitle = "RFP Digital Productions",
    youtubeUrl?: string
  ) => {
    setVideoModal({
      isOpen: true,
      videoUrl: url,
      title,
      subtitle,
      youtubeUrl,
    });
  };

  const handleCloseVideo = () => {
    setVideoModal((prev) => ({ ...prev, isOpen: false }));
  };

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<FilterCategory, number> = {
      all: allProjects.length,
      ai: 0,
      film: 0,
      campaign: 0,
      documentary: 0,
      marketing: 0,
    };
    allProjects.forEach((p) => {
      const cat = p.filterCat as FilterCategory;
      if (counts[cat] !== undefined) {
        counts[cat]++;
      }
    });
    return counts;
  }, [allProjects]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => activeFilter === "all" || project.filterCat === activeFilter);
  }, [allProjects, activeFilter]);

  return (
    <div className="min-h-screen bg-[#0e0d12] text-[#f4f2f7] font-sans antialiased selection:bg-[#6b54ee] selection:text-white">
      {/* Global Navigation Header */}
      <Header />

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden border-b border-white/[0.08]">
          {/* Ambient Lighting Glows */}
          <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#6b54ee]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="site-container relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs font-mono text-white/50 mb-6">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="text-[#a89bfa]">Projects</span>
            </div>

            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E6C665]" />
              <span>Selected Work · Curated Production Showcase</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl">
              <span className="block text-white/60 font-medium">
                We don’t just <span className="text-white font-bold">shoot videos.</span>
              </span>
              <span className="block mt-1.5 sm:mt-2.5">
                We build{" "}
                <span className="bg-gradient-to-r from-[#b4a6ff] via-[#e5c665] to-white bg-clip-text text-transparent italic font-serif">
                  visual stories.
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#f4f2f7b8] leading-relaxed max-w-3xl mb-8">
              Explore our complete body of work spanning TV commercials, corporate films, institutional documentaries, assembly and parliamentary election campaigns, mobile LED van operations, and next-generation AI video productions.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl pt-6 border-t border-white/[0.08]">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white block">
                  {allProjects.length}
                </span>
                <span className="text-xs text-white/60 font-mono uppercase tracking-wider">
                  Featured Masterpieces
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#a89bfa] block">
                  6
                </span>
                <span className="text-xs text-white/60 font-mono uppercase tracking-wider">
                  Core Disciplines
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E6C665] block">
                  DCI 4K
                </span>
                <span className="text-xs text-white/60 font-mono uppercase tracking-wider">
                  Cinema Standard
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 block">
                  17+ Yrs
                </span>
                <span className="text-xs text-white/60 font-mono uppercase tracking-wider">
                  Production Legacy
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter, Search & Controls Section */}
        <section className="sticky top-[73px] z-30 bg-[#0e0d12]/95 backdrop-blur-xl border-b border-white/[0.08] py-4 transition-all">
          <div className="site-container">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Category Pills Bar */}
              <div className="flex items-center overflow-x-auto pb-1 lg:pb-0 scrollbar-none gap-2">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeFilter === cat.id;
                  const count = categoryCounts[cat.id];
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveFilter(cat.id);
                      }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all shrink-0 ${
                        isActive
                          ? "bg-[#6b54ee] text-white shadow-lg shadow-[#6b54ee]/30 font-semibold"
                          : "bg-[#17161d] text-[#f4f2f7]/70 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#a89bfa]"}`} />
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                          isActive ? "bg-black/30 text-white" : "bg-white/[0.08] text-white/60"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* Content Showcase Section */}
        <section className="site-container py-12 lg:py-16">
          {/* Active Category Description Header */}
          {activeFilter !== "all" && (
            <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#17161d] border border-white/[0.1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#a89bfa]">
                    Category View
                  </span>
                  <span className="text-white/30">·</span>
                  <span className="text-xs font-mono text-white/60">
                    {filteredProjects.length} Projects Available
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {CATEGORIES.find((c) => c.id === activeFilter)?.label}
                </h2>
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-2xl">
                  {CATEGORIES.find((c) => c.id === activeFilter)?.description}
                </p>
              </div>
              <button
                onClick={() => setActiveFilter("all")}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-white/80 hover:text-white transition-all self-start sm:self-center"
              >
                <span>View All Projects</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* No Projects Found Fallback */}
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center rounded-3xl bg-[#17161d] border border-white/[0.08] p-8">
              <Layers className="w-12 h-12 text-white/30 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">No projects found</h3>
              <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto mb-6">
                We couldn&apos;t find any productions matching your selected category.
              </p>
              <button
                onClick={() => {
                  setActiveFilter("all");
                }}
                className="px-5 py-2.5 rounded-full bg-[#6b54ee] hover:bg-[#7c6af2] text-xs font-semibold text-white transition-all"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            /* Unified Bento / Responsive Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCardItem
                  key={project.id}
                  project={project}
                  onPlayVideo={handleOpenVideo}
                  onSelectProject={setSelectedProject}
                />
              ))}
            </div>
          )}
        </section>

        {/* Bottom Conversion Section */}
        <section className="site-container pt-8">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-tr from-[#17161d] via-[#1c1a24] to-[#17161d] border border-white/[0.12] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block">
                Work With RFP Digital
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Ready to produce your next film or election campaign?
              </h2>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Connect directly with our executive directors and war room strategists for consultation, technical recce, or quote estimation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/#kontakt"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-white/90 text-[#0e0d12] text-xs font-bold uppercase tracking-wider transition-all shadow-xl text-center"
              >
                Inquire Project
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideo}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
        subtitle={videoModal.subtitle}
      />

      {/* Project Case Study Drawer Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onWatchReel={(url, title) => {
          setSelectedProject(null);
          handleOpenVideo(url, title, "RFP Digital Productions Showcase");
        }}
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

// Project Card Item Component
const ProjectCardItem: React.FC<{
  project: ProjectCard;
  onPlayVideo: (videoUrl: string, title: string, subtitle?: string, youtubeUrl?: string) => void;
  onSelectProject: (project: ProjectCard) => void;
}> = ({ project, onPlayVideo, onSelectProject }) => {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const currentVideo =
    project.videos && project.videos.length > 0 ? project.videos[activeVideoIdx] : null;

  const displayPoster = currentVideo ? currentVideo.poster : project.poster;
  const displayVideoUrl = currentVideo ? currentVideo.videoUrl : project.videoUrl || "";
  const displayTitle = currentVideo ? currentVideo.title : project.title;
  const displaySubtitle = currentVideo ? currentVideo.subtitle : project.categoryEn;

  return (
    <article className="relative group rounded-2xl sm:rounded-[26px] overflow-hidden bg-[#17161d] border border-white/[0.1] hover:border-[#a89bfa]/50 transition-all duration-500 shadow-xl flex flex-col justify-between">
      {/* Visual Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
        <img
          key={displayPoster}
          src={displayPoster}
          alt={displayTitle}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17161d] via-black/25 to-transparent pointer-events-none" />

        {/* Play Button Trigger */}
        {displayVideoUrl && (
          <button
            onClick={() => onPlayVideo(displayVideoUrl, displayTitle, displaySubtitle, project.youtubeUrl)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#0e0d12]/85 hover:bg-[#6b54ee] text-white border border-white/25 backdrop-blur-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-xl active:scale-95"
            aria-label={`Play Video: ${displayTitle}`}
          >
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </button>
        )}

        {/* Category tag */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-[#a89bfa] uppercase">
            {project.categoryEn}
          </span>
        </div>

        {/* Multi-video pill indicator */}
        {project.videos && project.videos.length > 1 && (
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2.5 py-1 rounded-full bg-[#6b54ee]/90 backdrop-blur-md border border-white/20 text-[10px] font-mono font-semibold text-white uppercase shadow">
              {project.videos.length} Videos
            </span>
          </div>
        )}

        {/* Interactive Video Switcher Pills at bottom of preview */}
        {project.videos && project.videos.length > 1 && (
          <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 flex items-center gap-1.5 p-1 rounded-xl bg-black/85 backdrop-blur-md border border-white/15">
            {project.videos.map((vid, idx) => {
              const label =
                vid.shortTitle ||
                (vid.title.includes("Antul")
                  ? "Dr. Antul"
                  : vid.title.includes("Umesh")
                  ? "Umesh Agarwal"
                  : vid.title.includes("Ajit")
                  ? "Ajit Sharma"
                  : vid.title.includes("Gautam")
                  ? "Rajendra Gautam"
                  : vid.title.includes("Babli")
                  ? "Devender Babli"
                  : vid.title.includes("Devendra")
                  ? "Devendra Yadav"
                  : vid.title.includes("Shashi")
                  ? "Shashi Jain"
                  : vid.title.includes("Showreel")
                  ? "Showreel"
                  : `Video ${idx + 1}`);
              return (
                <button
                  key={vid.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideoIdx(idx);
                  }}
                  className={`flex-1 flex items-center justify-center space-x-1 py-1 px-1.5 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all ${
                    activeVideoIdx === idx
                      ? "bg-[#6b54ee] text-white shadow font-semibold"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Play className="w-2.5 h-2.5 fill-current shrink-0" />
                  <span className="truncate">{label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Content Area */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#f4f2f7] mb-2 tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#f4f2f7b8] leading-relaxed mb-3 font-light">
            {project.descEn}
          </p>

          {/* Multiple Videos Playlist list inside same box */}
          {project.videos && project.videos.length > 1 && (
            <div className="my-3 space-y-2 border-t border-b border-white/[0.08] py-2.5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#a89bfa]">
                Videos in this Campaign Box
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                {project.videos.map((vid, idx) => (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => {
                      setActiveVideoIdx(idx);
                      onPlayVideo(vid.videoUrl, vid.title, vid.subtitle || project.categoryEn, vid.youtubeUrl);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all ${
                      activeVideoIdx === idx
                        ? "bg-[#6b54ee]/20 border border-[#6b54ee]/45 text-white"
                        : "bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] text-[#f4f2f7]/80"
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                          activeVideoIdx === idx
                            ? "bg-[#6b54ee] text-white"
                            : "bg-white/10 text-white/70"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white truncate">{vid.title}</p>
                        <p className="text-[10px] text-white/50 truncate">{vid.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5 shrink-0">
                      <span className="text-[10px] font-medium text-[#a89bfa]">Watch</span>
                      <Play className="w-3 h-3 fill-current text-[#a89bfa]" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-[#f4f2f780]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
          <span className="text-[11px] font-mono text-[#f4f2f780] truncate max-w-[50%]">
            {project.client}
          </span>
          <div className="flex items-center space-x-2 shrink-0">
            {project.youtubeUrl && (
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-red-600/15 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/25 text-[10px] font-mono font-medium transition-all"
                title="Watch on YouTube"
              >
                <span>YouTube</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center space-x-1 text-xs font-semibold text-[#a89bfa] hover:text-white transition-colors"
            >
              <span>Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
