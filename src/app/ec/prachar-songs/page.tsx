"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Music,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Download,
  Disc3,
  Radio,
  CheckCircle2,
  Share2,
  Headphones,
  Sliders,
  Flame,
  Award,
  ExternalLink,
  Video
} from "lucide-react";
import { VideoModal } from "@/components/modals/VideoModal";

interface SongTrack {
  id: string;
  title: string;
  candidate: string;
  partyBadge: string;
  duration: string;
  audioSrc?: string;
  videoUrl?: string;
  coverImage: string;
  description: string;
  genre: string;
  lyricsSnippet: string;
}

const PLAYLIST: SongTrack[] = [
  {
    id: "aman-ahmed",
    title: "Aman Ahmed Campaign Anthem",
    candidate: "Aman Ahmed",
    partyBadge: "Vidhan Sabha Campaign",
    duration: "05:24",
    audioSrc: "/medien/ec-assets/audio-prachar-song/aman-ahmed-song.mp3",
    coverImage: "/medien/landing/chunav-prachar-song.png",
    description: "High-energy rousing electoral anthem composed with Punjabi/Bhojpuri dhol beats and inspiring lyrics rallying voters for constituency transformation.",
    genre: "High-Energy Folk Anthem",
    lyricsSnippet: "“Aman Ahmed sang chale aam jan, Badlega har mohalla har gaon ka jeevan...”"
  },
  {
    id: "om-kumar",
    title: "Om Kumar Ji Prachar Song - 2nd Dynamic Master",
    candidate: "K. Om Kumar",
    partyBadge: "Electoral Victory CD Master",
    duration: "04:12",
    audioSrc: "/medien/ec-assets/audio-prachar-song/bjp-k-om-kumar-2nd-dynamiccd.m4a",
    coverImage: "/medien/ec-assets/audio-prachar-song/om-kumar-prachar-song.jpg",
    description: "Studio mastered high-dynamic stereo campaign song crafted for loud public rally loudspeakers, vehicle megaphones, and viral street DJ mixes.",
    genre: "Rally Loudspeaker CD Master",
    lyricsSnippet: "“Karmasheel neta, vikas ki pehchan... Om Kumar ji ke sang pura aawam...”"
  },
  {
    id: "danish-ali",
    title: "Aayenge Danish Ali, Chhayenge Danish Ali",
    candidate: "Kunwar Danish Ali (Mahagathbandhan)",
    partyBadge: "Amroha Lok Sabha 9 Campaign",
    duration: "02:37",
    videoUrl: "https://www.youtube.com/watch?v=yJwUYC21n1A",
    coverImage: "/medien/ec-assets/audio-prachar-song/danish-ali-prachar-song.jpg",
    description: "Official high-energy lyrical campaign anthem & rally video for Kunwar Danish Ali, Mahagathbandhan candidate for Amroha Lok Sabha 9.",
    genre: "Official Lyrical Video Anthem",
    lyricsSnippet: "“आएंगे दानिश अली, छाएंगे दानिश अली... Amroha ki aawaz, jan-jan ka vishwas...”"
  }
];

const AUDIO_FEATURES = [
  {
    title: "Custom Studio Recording",
    desc: "Recorded with live folk instrumentation, professional studio vocalists, and rhythmic hooks tuned for instant public recall."
  },
  {
    title: "Dual Format Mastering",
    desc: "Mastered in high-dynamic range for massive rally horn loudspeakers and optimized compressed masters for WhatsApp and Instagram reels."
  },
  {
    title: "Dialect & Linguistic Localization",
    desc: "Lyrics crafted in the authentic regional dialects (Bhojpuri, Maithili, Braj, Haryanvi, Hindi) for emotional cultural resonance."
  },
  {
    title: "Viral Hook Architecture",
    desc: "Designed with 15-second contagious chorus drops crafted specifically to dominate Instagram Reels and YouTube Shorts."
  }
];

export default function PracharSongsPage() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string; subtitle: string } | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeTrack = PLAYLIST[currentTrackIndex];

  const openVideo = (url: string, title: string, subtitle: string) => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    setSelectedVideo({ url, title, subtitle });
    setVideoModalOpen(true);
  };

  // Sync audio play/pause or open video modal
  const togglePlay = () => {
    if (activeTrack.videoUrl) {
      openVideo(
        activeTrack.videoUrl,
        activeTrack.title,
        `${activeTrack.candidate} • ${activeTrack.partyBadge}`
      );
      return;
    }
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasError(false);
      }).catch((err) => {
        console.error("Audio playback error:", err);
        setHasError(true);
      });
    }
  };

  const handleTrackChange = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(false);
    setCurrentTime(0);
    setHasError(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const track = PLAYLIST[index];
    if (track.videoUrl) {
      openVideo(track.videoUrl, track.title, `${track.candidate} • ${track.partyBadge}`);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    if (audioRef.current) {
      audioRef.current.currentTime = targetTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    if (val === 0) setIsMuted(true);
    else setIsMuted(false);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "00:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="min-h-screen bg-[#0a090e] text-[#f4f2f7] font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      <Header />

      <main className="pt-28 pb-20">
        {/* Breadcrumb Navigation */}
        <section className="site-container mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-white/50">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/ec" className="hover:text-white transition-colors">
              <span>EC Hub</span>
            </Link>
            <span>/</span>
            <span className="text-[#E6C665] font-semibold">Pillar 02: Original Prachar Songs &amp; Anthems</span>
          </div>
        </section>

        {/* Hero Header */}
        <section className="relative py-12 sm:py-16 border-b border-white/[0.08] overflow-hidden">
          <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-[#6b54ee]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="site-container relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-xs font-mono text-[#F3E5AB] mb-6">
              <span className="px-2 py-0.5 rounded-md bg-[#D4AF37]/25 text-[#E6C665] font-bold">
                PILLAR 02
              </span>
              <span className="uppercase tracking-widest font-semibold text-[#E6C665]">
                Audio &amp; Musical Campaign Warfare
              </span>
            </div>

            <div className="max-w-4xl space-y-5">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12]">
                Original Prachar Songs &amp; Lyrical Anthems
              </h1>
              <p className="text-xl sm:text-2xl font-serif italic text-[#E6C665]">
                &ldquo;Music that Electrifies Thousands in Public Rallies and Dominates Social Media Reels.&rdquo;
              </p>
              <p className="text-base sm:text-lg text-white/80 font-sans leading-relaxed max-w-3xl">
                A political song is the emotional backbone of any election campaign. We produce original, copyrighted campaign anthems recorded in state-of-the-art studios with authentic local musical instruments, regional dialects, and captivating slogans that voters hum for months.
              </p>
            </div>
          </div>
        </section>

        {/* Live Audio Player Section */}
        <section className="site-container py-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-[#E6C665] uppercase tracking-widest block mb-1">
                Interactive In-Page Player
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white">
                Listen to Official Campaign Anthems
              </h2>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-white/70">
              <Disc3 className={`w-4 h-4 text-[#E6C665] ${isPlaying ? "animate-spin" : ""}`} />
              <span>Studio Master Feed</span>
            </div>
          </div>

          {/* Master Player Box */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#161520] via-[#111019] to-[#09080e] border border-[#D4AF37]/35 p-6 sm:p-10 shadow-2xl overflow-hidden">
            {/* Ambient Back Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Hidden HTML5 Audio Element for audio tracks */}
            {activeTrack.audioSrc && (
              <audio
                ref={audioRef}
                src={activeTrack.audioSrc}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                onError={() => setHasError(true)}
                preload="metadata"
              />
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Album Art with Vinyl / Video Effect */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => {
                    if (activeTrack.videoUrl) {
                      openVideo(
                        activeTrack.videoUrl,
                        activeTrack.title,
                        `${activeTrack.candidate} • ${activeTrack.partyBadge}`
                      );
                    } else {
                      togglePlay();
                    }
                  }}
                  className="relative w-full max-w-sm rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl group bg-black/80 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6C665]"
                  title={activeTrack.videoUrl ? "Click to play official video" : "Click to play/pause"}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeTrack.coverImage}
                    alt={activeTrack.title}
                    className="block w-full aspect-video object-contain"
                  />

                  {/* Video Play Badge overlay */}
                  {activeTrack.videoUrl ? (
                    <span className="flex items-center justify-center gap-3 p-3 bg-black/80 group-hover:bg-white/5 transition-colors">
                      <span className="w-9 h-9 shrink-0 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center transition-colors">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </span>
                      <span className="text-[11px] font-mono text-[#F3E5AB]">
                        Watch Official Video
                      </span>
                    </span>
                  ) : isPlaying ? (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                      {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
                        <div
                          key={bar}
                          className="w-1 bg-[#E6C665] rounded-full animate-pulse"
                          style={{
                            height: `${12 + (bar % 3) * 8}px`,
                            animationDelay: `${bar * 120}ms`
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                        <Play className="w-5 h-5 fill-black ml-0.5" />
                      </div>
                    </div>
                  )}
                </button>

                <div className="mt-4 text-center">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-mono text-[#E6C665]">
                    {activeTrack.partyBadge}
                  </span>
                </div>
              </div>

              {/* Controls and Track Info */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
                      {activeTrack.genre}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="text-xs font-mono text-[#E6C665]">
                      Candidate: {activeTrack.candidate}
                    </span>
                    {activeTrack.videoUrl && (
                      <>
                        <span className="text-white/30">•</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600/20 border border-red-500/30 text-[10px] font-mono text-red-300">
                          <Video className="w-3 h-3" />
                          <span>YouTube Official</span>
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                    {activeTrack.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-sans mt-2 leading-relaxed">
                    {activeTrack.description}
                  </p>
                </div>

                {/* Lyrics Highlight Quote */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] text-xs sm:text-sm font-serif italic text-[#F3E5AB]">
                  {activeTrack.lyricsSnippet}
                </div>

                {/* Audio Seek Bar vs Video Status Bar */}
                {activeTrack.audioSrc ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-white/60">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration || 0)}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={duration || 100}
                      step="0.1"
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-2 rounded-lg bg-white/10 appearance-none cursor-pointer accent-[#D4AF37]"
                    />
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-white/70">
                      <Video className="w-4 h-4 text-[#E6C665]" />
                      <span>YouTube High-Definition Master Track</span>
                    </div>
                    <span className="text-[#E6C665] font-semibold">{activeTrack.duration}</span>
                  </div>
                )}

                {/* Main Player Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  {activeTrack.videoUrl ? (
                    /* Video Controls */
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() =>
                          openVideo(
                            activeTrack.videoUrl!,
                            activeTrack.title,
                            `${activeTrack.candidate} • ${activeTrack.partyBadge}`
                          )
                        }
                        className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#E6C665] text-black font-semibold flex items-center gap-2.5 transition-all transform hover:scale-105 shadow-xl shadow-[#D4AF37]/30"
                        aria-label="Watch Video Anthem"
                      >
                        <Play className="w-5 h-5 fill-black" />
                        <span className="text-xs font-mono tracking-wider uppercase">Watch Video Anthem</span>
                      </button>

                      <a
                        href={activeTrack.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-xs font-mono text-red-200 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-red-400" />
                        <span>Open on YouTube</span>
                      </a>
                    </div>
                  ) : (
                    /* Audio Controls */
                    <div className="flex items-center gap-4">
                      {/* Play/Pause Button */}
                      <button
                        onClick={togglePlay}
                        className="w-14 h-14 rounded-full bg-[#D4AF37] hover:bg-[#E6C665] text-black flex items-center justify-center transition-all transform hover:scale-105 shadow-xl shadow-[#D4AF37]/30"
                        aria-label={isPlaying ? "Pause Song" : "Play Song"}
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 fill-black" />
                        ) : (
                          <Play className="w-6 h-6 fill-black ml-1" />
                        )}
                      </button>

                      {/* Reset Track */}
                      <button
                        onClick={() => {
                          if (audioRef.current) {
                            audioRef.current.currentTime = 0;
                            setCurrentTime(0);
                          }
                        }}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                        title="Replay from start"
                      >
                        <RotateCcw className="w-5 h-5" />
                      </button>

                      {/* Volume Slider */}
                      <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-black/40 border border-white/10">
                        <button onClick={toggleMute} className="text-white/70 hover:text-[#E6C665]">
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          className="w-20 h-1.5 rounded-lg bg-white/10 appearance-none cursor-pointer accent-[#D4AF37]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Direct Download Link for Audio Tracks */}
                  {activeTrack.audioSrc && (
                    <a
                      href={activeTrack.audioSrc}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-colors"
                    >
                      <Download className="w-4 h-4 text-[#E6C665]" />
                      <span>Download Audio File</span>
                    </a>
                  )}
                </div>

                {hasError && (
                  <p className="text-xs text-rose-400 font-mono">
                    Note: Audio file loaded. Click play button above to start playback in your browser.
                  </p>
                )}
              </div>
            </div>

            {/* Playlist Track Selection List */}
            <div className="mt-10 pt-8 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-[#E6C665] uppercase tracking-widest block mb-4">
                Available Campaign Audio Masters &amp; Video Anthems:
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PLAYLIST.map((track, idx) => {
                  const isSelected = idx === currentTrackIndex;
                  return (
                    <div
                      key={track.id}
                      onClick={() => handleTrackChange(idx)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
                        isSelected
                          ? "bg-[#D4AF37]/10 border-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/10"
                          : "bg-black/30 border-white/[0.08] hover:border-white/20 text-white/70"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                            isSelected
                              ? "bg-[#D4AF37] text-black"
                              : "bg-white/5 text-white/50"
                          }`}
                        >
                          {isSelected && isPlaying ? (
                            <Disc3 className="w-5 h-5 animate-spin" />
                          ) : track.videoUrl ? (
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          ) : (
                            `0${idx + 1}`
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-medium font-serif text-white line-clamp-1">
                            {track.title}
                          </h4>
                          <span className="text-xs font-mono text-[#E6C665] block truncate mt-0.5">
                            {track.candidate}
                          </span>
                          <span className="text-[11px] font-mono text-white/50 block truncate">
                            {track.genre}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs font-mono">
                        <div>
                          {track.videoUrl ? (
                            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-500/20">
                              <Video className="w-3 h-3" />
                              <span>Video Master</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] uppercase text-white/50">
                              <Music className="w-3 h-3" />
                              <span>Audio Master</span>
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-white/40">{track.duration}</span>
                          {isSelected && (
                            <span className="text-[10px] uppercase text-[#E6C665] font-bold">
                              {track.videoUrl ? "Active" : isPlaying ? "Playing" : "Selected"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Studio Production Features */}
        <section className="site-container py-16 border-t border-white/[0.08]">
          <div className="mb-10">
            <span className="text-xs font-mono text-[#E6C665] uppercase tracking-widest block mb-2">
              Why RFP Campaign Anthems Win Elections
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">
              The Science of Emotional Voter Mobilization
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIO_FEATURES.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#14131b] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#E6C665]">
                  <Headphones className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif text-white font-medium">
                  {item.title}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Bar */}
        <section className="site-container py-12 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/ec/mobile-led-fleet"
              className="inline-flex items-center gap-2 text-sm font-mono text-white/70 hover:text-[#E6C665] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: Pillar 01 (LED Fleet)</span>
            </Link>

            <Link
              href="/ec/nukkad-natak"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/40 text-[#F3E5AB] text-sm font-mono transition-colors"
            >
              <span>Explore Pillar 03: Nukkad Natak &amp; Street Theatre</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Video Modal for YouTube Video Tracks */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl={selectedVideo?.url || activeTrack.videoUrl}
        title={selectedVideo?.title || activeTrack.title}
        subtitle={selectedVideo?.subtitle || `${activeTrack.candidate} • ${activeTrack.partyBadge}`}
      />

      <Footer />
    </div>
  );
}
