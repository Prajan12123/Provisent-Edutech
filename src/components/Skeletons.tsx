import React from 'react';

/**
 * Base Skeleton Element with smooth cyber-cyan shimmer animation
 */
export const Skeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`skeleton-shimmer rounded-xl bg-slate-800/40 border border-white/5 ${className}`}
      aria-hidden="true"
    />
  );
};

/**
 * Skeleton Loader for Flagship Professional Course Cards
 * Faithfully mirrors the Course Card layout in CoursesPage
 */
export const CourseCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-3xl bg-slate-900/60 border border-white/10 overflow-hidden flex flex-col justify-between shadow-xl animate-in fade-in duration-300">
      <div>
        {/* Course Card Thumbnail & Badge Overlay */}
        <div className="relative h-48 w-full bg-slate-800/50 skeleton-shimmer overflow-hidden">
          {/* Top Badge placeholder */}
          <div className="absolute top-3 left-3 w-20 h-5 rounded-md skeleton-shimmer bg-slate-700/60" />
          
          {/* Bottom Pills */}
          <div className="absolute bottom-3 left-3 w-24 h-5 rounded-full skeleton-shimmer bg-slate-700/60" />
          <div className="absolute bottom-3 right-3 w-20 h-5 rounded-full skeleton-shimmer bg-slate-700/60" />
        </div>

        {/* Tab switch bar placeholder */}
        <div className="p-3 bg-slate-950/80 border-b border-white/10 flex items-center justify-between gap-2">
          <div className="flex-1 h-7 rounded-lg skeleton-shimmer bg-slate-800/60" />
          <div className="flex-1 h-7 rounded-lg skeleton-shimmer bg-slate-800/60" />
          <div className="flex-1 h-7 rounded-lg skeleton-shimmer bg-slate-800/60" />
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-4">
          {/* Title (2 lines) */}
          <div className="space-y-2">
            <div className="h-4.5 w-4/5 rounded-lg skeleton-shimmer bg-slate-700/50" />
            <div className="h-4 w-3/5 rounded-lg skeleton-shimmer bg-slate-700/40" />
          </div>

          {/* Description lines */}
          <div className="space-y-2 pt-1">
            <div className="h-3 w-full rounded skeleton-shimmer bg-slate-800/60" />
            <div className="h-3 w-11/12 rounded skeleton-shimmer bg-slate-800/50" />
          </div>

          {/* Instructor & Rating row */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full skeleton-shimmer bg-slate-700/60" />
              <div className="h-3 w-24 rounded skeleton-shimmer bg-slate-800/60" />
            </div>
            <div className="h-3 w-16 rounded skeleton-shimmer bg-slate-800/60" />
          </div>

          {/* Duration & Modules Meta Row */}
          <div className="flex items-center gap-3 pt-1">
            <div className="h-3 w-16 rounded skeleton-shimmer bg-slate-800/50" />
            <div className="h-3 w-16 rounded skeleton-shimmer bg-slate-800/50" />
            <div className="h-3 w-20 rounded skeleton-shimmer bg-slate-800/50" />
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            <div className="h-4.5 w-14 rounded-md skeleton-shimmer bg-slate-800/60" />
            <div className="h-4.5 w-16 rounded-md skeleton-shimmer bg-slate-800/60" />
            <div className="h-4.5 w-12 rounded-md skeleton-shimmer bg-slate-800/60" />
          </div>
        </div>
      </div>

      {/* Footer: Tuition & Action Buttons */}
      <div className="p-5 pt-3 border-t border-white/10 bg-slate-950/40 flex items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="h-3 w-10 rounded skeleton-shimmer bg-slate-800/50" />
          <div className="h-5 w-20 rounded-md skeleton-shimmer bg-slate-700/60" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-16 rounded-xl skeleton-shimmer bg-slate-800/60" />
          <div className="h-8 w-24 rounded-xl skeleton-shimmer bg-cyan-900/30 border border-cyan-500/20" />
        </div>
      </div>
    </div>
  );
};

/**
 * Grid of Course Card Skeletons
 */
export const CourseCardsGridSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <CourseCardSkeleton key={idx} />
      ))}
    </div>
  );
};

/**
 * Bootcamp Card Skeleton
 */
export const BootcampCardSkeleton: React.FC = () => {
  return (
    <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 flex flex-col justify-between space-y-6 shadow-xl">
      <div className="space-y-4">
        {/* Batch date and seats badge */}
        <div className="flex items-center justify-between">
          <div className="h-6 w-28 rounded-full skeleton-shimmer bg-amber-950/40 border border-amber-500/20" />
          <div className="h-5 w-20 rounded-full skeleton-shimmer bg-rose-950/40 border border-rose-500/20" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-3/4 rounded-lg skeleton-shimmer bg-slate-700/50" />
          <div className="h-3.5 w-1/3 rounded-lg skeleton-shimmer bg-slate-800/60" />
        </div>

        {/* Highlights */}
        <div className="space-y-2 pt-2">
          <div className="h-3 w-full rounded skeleton-shimmer bg-slate-800/50" />
          <div className="h-3 w-4/5 rounded skeleton-shimmer bg-slate-800/40" />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="h-6 w-24 rounded skeleton-shimmer bg-slate-800/60" />
        <div className="h-8 w-28 rounded-xl skeleton-shimmer bg-amber-900/30 border border-amber-500/20" />
      </div>
    </div>
  );
};

/**
 * Dashboard Stat / KPI Widget Skeleton
 */
export const StatCardSkeleton: React.FC = () => {
  return (
    <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
      <div className="h-3.5 w-24 rounded skeleton-shimmer bg-slate-800/60" />
      <div className="h-8 w-28 rounded-lg skeleton-shimmer bg-slate-700/60 mt-1" />
      <div className="h-3 w-32 rounded skeleton-shimmer bg-slate-800/50" />
    </div>
  );
};

/**
 * 4-Column Grid for Dashboard Stat Cards
 */
export const StatCardsGridSkeleton: React.FC<{ count?: number }> = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, idx) => (
        <StatCardSkeleton key={idx} />
      ))}
    </div>
  );
};

/**
 * In-Progress Course / Classroom Row Skeleton (for Student Dashboard)
 */
export const EnrolledCourseCardSkeleton: React.FC = () => {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl skeleton-shimmer bg-slate-800/60 shrink-0" />
          <div className="space-y-2">
            <div className="h-4 w-48 rounded-md skeleton-shimmer bg-slate-700/50" />
            <div className="h-3 w-32 rounded skeleton-shimmer bg-slate-800/60" />
          </div>
        </div>
        <div className="h-8 w-32 rounded-xl skeleton-shimmer bg-cyan-950/40 border border-cyan-500/20" />
      </div>

      {/* Progress bar placeholder */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 rounded skeleton-shimmer bg-slate-800/50" />
          <div className="h-3 w-10 rounded skeleton-shimmer bg-slate-800/50" />
        </div>
        <div className="w-full h-2 rounded-full skeleton-shimmer bg-slate-800/60" />
      </div>
    </div>
  );
};

/**
 * Live Session / Schedule Widget Skeleton
 */
export const DashboardSessionSkeleton: React.FC = () => {
  return (
    <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
      <div className="flex items-center justify-between">
        <div className="h-4 w-28 rounded skeleton-shimmer bg-slate-700/60" />
        <div className="h-4 w-16 rounded-full skeleton-shimmer bg-purple-950/40 border border-purple-500/20" />
      </div>
      <div className="h-5 w-4/5 rounded-lg skeleton-shimmer bg-slate-800/60" />
      <div className="flex items-center gap-3 pt-1">
        <div className="w-6 h-6 rounded-full skeleton-shimmer bg-slate-700/60" />
        <div className="h-3 w-32 rounded skeleton-shimmer bg-slate-800/50" />
      </div>
      <div className="pt-2">
        <div className="h-8 w-full rounded-xl skeleton-shimmer bg-slate-800/60" />
      </div>
    </div>
  );
};

/**
 * Admin / Faculty Table Row Skeleton
 */
export const TableRowSkeleton: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-white/5 gap-4">
      <div className="flex items-center gap-3 flex-1">
        <div className="w-8 h-8 rounded-full skeleton-shimmer bg-slate-800/60 shrink-0" />
        <div className="space-y-1.5 flex-1">
          <div className="h-3.5 w-40 rounded skeleton-shimmer bg-slate-700/60" />
          <div className="h-3 w-24 rounded skeleton-shimmer bg-slate-800/40" />
        </div>
      </div>
      <div className="h-5 w-20 rounded-full skeleton-shimmer bg-slate-800/60" />
      <div className="h-8 w-20 rounded-lg skeleton-shimmer bg-slate-800/60" />
    </div>
  );
};

/**
 * Generic Widget Card Skeleton
 */
export const DashboardWidgetSkeleton: React.FC<{ rows?: number; title?: string }> = ({ rows = 3, title }) => {
  return (
    <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="h-4.5 w-36 rounded-md skeleton-shimmer bg-slate-700/60" />
        <div className="h-3.5 w-16 rounded skeleton-shimmer bg-slate-800/50" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: rows }).map((_, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between gap-3">
            <div className="space-y-1.5 flex-1">
              <div className="h-3.5 w-3/4 rounded skeleton-shimmer bg-slate-800/60" />
              <div className="h-3 w-1/2 rounded skeleton-shimmer bg-slate-800/40" />
            </div>
            <div className="h-6 w-14 rounded-lg skeleton-shimmer bg-slate-800/60" />
          </div>
        ))}
      </div>
    </div>
  );
};
