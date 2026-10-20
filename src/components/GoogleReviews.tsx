import { ArrowUpRight, Star } from "lucide-react";

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=rfp+digital+productions#lrd=0x390ce388232cc447:0xa28c99d6fe69125e,1,,,,";

// Short excerpts checked against the public Google listing on 19 October 2026.
const reviews = [
  { name: "Huzaifa Shaikh", contributor: "102533851630446840655", quote: "RFP Digital Production truly sets the benchmark for creativity, quality, and professionalism." },
  { name: "SHAHJAD MALIK", contributor: "103831043563396773806", quote: "Where all your needs are worked out smoothly And excellent work is done in very Reasonable Rates." },
  { name: "Shagufta Chauhan", contributor: "111635537165754464548", quote: "A great fun loving and at the same time seriously dedicated and broadly experienced team of experts" },
  { name: "Ali Khan Mewati", contributor: "115947475350556843409", quote: "Their dedication and creativity truly set them apart in the industry." },
  { name: "Divya Sharma", contributor: "100243877876393557328", quote: "They are open to feedback and suggestions. Overall content creation is good and timely delivered." },
  { name: "A Azad", contributor: "105529938416559885604", quote: "Professional behavior and quality work together. Mr. maqsood ahmed is very generous and down to earth person." },
];

export function GoogleReviews() {
  return (
    <section className="site-container py-16" aria-labelledby="google-reviews-heading">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#a89bfa] mb-3">Customer feedback</p>
          <h2 id="google-reviews-heading" className="text-3xl sm:text-4xl font-semibold">Google Reviews</h2>
          <p className="mt-4 flex flex-wrap items-center gap-2 text-white/70">
            <Star className="w-5 h-5 fill-[#E6C665] text-[#E6C665]" aria-hidden="true" />
            <strong className="text-white">4.9 / 5</strong> · 46 reviews
          </p>
          <p className="mt-2 text-xs text-white/45">Rating checked 19 October 2026. Selected excerpts below.</p>
        </div>
        <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#0e0d12] text-sm font-semibold hover:bg-[#eee9ff] transition-colors">
          View all reviews on Google <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <article key={review.contributor} className="flex flex-col rounded-2xl border border-white/10 bg-[#17161d] p-6 sm:p-7">
            <p className="text-xs text-[#a89bfa] mb-5">Google review · Excerpt</p>
            <blockquote className="text-base leading-relaxed text-white/85 flex-1">&ldquo;{review.quote}&rdquo;</blockquote>
            <div className="mt-7 pt-5 border-t border-white/10 flex items-center gap-3">
              <div aria-hidden="true" className="h-10 w-10 shrink-0 rounded-full bg-[#a89bfa]/15 text-[#c6bdff] flex items-center justify-center font-semibold">{review.name.charAt(0)}</div>
              <div>
                <h3 className="font-semibold text-sm">{review.name}</h3>
                <a href={`https://www.google.com/maps/contrib/${review.contributor}/reviews?hl=en-GB`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-white/55 hover:text-white mt-1">View on Google <ArrowUpRight className="w-3 h-3" /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
