import React from 'react';
import { Star } from 'lucide-react';

interface RealReview {
  id: string;
  author: string;
  date: string;
  quote: string;
  stars?: number;
  initials: string;
  bgColor: string; // Soft pastel card backgrounds from reference
  isArabic?: boolean;
}

const row1Reviews: RealReview[] = [
  {
    id: 'rev-1',
    author: 'Devis Turyamusiima',
    date: '1 month ago',
    stars: 5,
    quote:
      'I had a very good experience buying my Dell Precision laptop from this store. The laptop arrived exactly as described in the advertisement. It was in excellent condition (10/10), very clean, and everything worked perfectly after I tested it.',
    initials: 'DT',
    bgColor: 'bg-[#ded8fd]', // Soft Lavender
  },
  {
    id: 'rev-2',
    author: 'Ghouila Walid',
    date: '6 months ago',
    stars: 5,
    quote:
      'لكيب الزينة ربي يحفظكم و يبارك في رزقكم ، معاملة طيّبة ، منتوجات ولا أروع مع الضّمان ، سرعة فالتوصيل و احترافية فالتّغليف و حماية المنتجات. شريت عليهم HP elitebook 845 g8 ملقيتش سعر أحسن من السعر تاعهم.',
    initials: 'GW',
    bgColor: 'bg-[#d7e6fd]', // Soft Blue
    isArabic: true,
  },
  {
    id: 'rev-3',
    author: 'Wolfman',
    date: '4 months ago',
    stars: 5,
    quote:
      'بسم الله ما شاء الله. I got the Dell latitude 5300 2in1 and it was in good condition. The staff were very helpful and nice, and taught me how to preserve it and take care of it. I would definitely recommend them to everyone.',
    initials: 'WM',
    bgColor: 'bg-white border border-neutral-200/80 shadow-xs',
  },
  {
    id: 'rev-4',
    author: 'Àkrãm Íkräm',
    date: '1 month ago',
    stars: 5,
    quote:
      'وصلت الطلبية في أسرع وقت، ما شاء الله تبارك الرحمن 🌸 الحاسوب رائع جدًا، وكل المواصفات كما تم ذكرها تمامًا دون أي نقص. أشكركم على الصدق والمصداقية وحسن التعامل.',
    initials: 'AÍ',
    bgColor: 'bg-[#fedec5]', // Soft Warm Peach
    isArabic: true,
  },
  {
    id: 'rev-5',
    author: 'Anis Bouguerra',
    date: '3 weeks ago',
    stars: 5,
    quote:
      'Excellent shop and top-notch, highly professional service. Everything was fast and great, and the prices are very competitive. I highly recommend dealing with them!',
    initials: 'AB',
    bgColor: 'bg-[#d2dcfe]', // Soft Periwinkle
  },
];

const row2Reviews: RealReview[] = [
  {
    id: 'rev-6',
    author: 'dzéko Db',
    date: '5 months ago',
    stars: 5,
    quote:
      'السلام عليكم. معاملة ما شاء الله سلعة ما شاء الله محل ثقة بارك الله فيكم، كان ليا الشرف و شاركت في مسابقة في انستغرام و ربحت الحمد لله و لحقتني الأمانة ربي يوفقكم.',
    initials: 'DB',
    bgColor: 'bg-white border border-neutral-200/80 shadow-xs',
    isArabic: true,
  },
  {
    id: 'rev-7',
    author: 'Adel Moussaoui',
    date: '11 months ago',
    stars: 5,
    quote:
      'ديت عليه لابتوب Am tech dely ibrahim تحية خاصة وكانت تجربة رائعة ورالي و فهمني تعامل واضح وسلس نصح أواحد يشري عليهم ثقة و مصداقية و معاملة يتهلو فيكم Dell latitude.',
    initials: 'AM',
    bgColor: 'bg-[#ded8fd]', // Soft Lavender
    isArabic: true,
  },
  {
    id: 'rev-8',
    author: 'Hamza Messous',
    date: '6 months ago',
    stars: 5,
    quote:
      'نصيحة لوجه الله (اشري ومتخممش) : راني شريت عليهم اليوم عبر خدمة التوصيل ماشي من الحانوت ولحقني ومعاه لي كادو تاني واش نقولكم معاملة يا خاوتي ماشاء الله واسعار ومنتجات كلها في القمة.',
    initials: 'HM',
    bgColor: 'bg-[#fedec5]', // Soft Peach
    isArabic: true,
  },
  {
    id: 'rev-9',
    author: 'Mohammed Dhiya Halassa',
    date: '2 months ago',
    stars: 5,
    quote:
      'أتقدم بخالص الشكر والتقدير لصاحب المحل على حسن الاستقبال والتعامل الراقي. الخدمة ممتازة وسرعة الرد في الواتساب كانت في المستوى. الجهاز وصلني مطابقاً تماماً للصور والمواصفات.',
    initials: 'MD',
    bgColor: 'bg-[#d7e6fd]', // Soft Sky Blue
    isArabic: true,
  },
  {
    id: 'rev-10',
    author: 'Elsoltan Hossamovic',
    date: '8 months ago',
    stars: 5,
    quote:
      'السلام عليكم. محل amtech delybrahim خاوتي عن تجربة محل محترم ما شاء الله ناس متواضعين ربي يحفظهم يقيمو الزبون ويعرفو واجبهم على أكمل وجه.',
    initials: 'EH',
    bgColor: 'bg-white border border-neutral-200/80 shadow-xs',
    isArabic: true,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-transparent py-6 sm:py-10 md:py-12 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-8 mb-6 sm:mb-8">
        {/* Eyebrow & Title */}
        <span
          id="testimonials-eyebrow"
          className="block text-[#8e9aa5] text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.22em] uppercase mb-1.5"
        >
          AVIS GOOGLE MAPS (5.0 ★)
        </span>
        <h2
          id="testimonials-title"
          className="text-[#14181c] font-serif-hero text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal tracking-tight leading-[1.15]"
        >
          Avis et retours d'expérience de nos clients.
        </h2>
      </div>

      {/* Marquee Container with Hover Pause */}
      <div className="marquee-container relative w-full space-y-3.5 sm:space-y-4">
        {/* Row 1: Scrolling Left */}
        <div className="flex overflow-hidden py-1">
          <div className="animate-marquee flex items-stretch space-x-3.5 sm:space-x-4">
            {[...row1Reviews, ...row1Reviews].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className={`w-[250px] sm:w-[290px] md:w-[320px] flex-shrink-0 rounded-[18px] sm:rounded-[20px] p-4 sm:p-5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer ${item.bgColor}`}
              >
                {/* Quotation & Review Body */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-serif text-black/80 leading-none select-none">
                      “
                    </div>
                    {/* 5 Stars */}
                    <div className="flex items-center space-x-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p
                    dir={item.isArabic ? 'rtl' : 'ltr'}
                    className={`text-neutral-800 text-[11px] sm:text-xs leading-relaxed font-normal ${
                      item.isArabic ? 'font-sans text-right' : 'text-left'
                    }`}
                  >
                    {item.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-2.5 pt-3.5 mt-3 border-t border-black/5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-900 text-white font-semibold text-[10px] sm:text-xs flex items-center justify-center flex-shrink-0 shadow-2xs">
                    {item.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-xs text-neutral-900 leading-tight truncate">
                      {item.author}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-500 font-light mt-0.5">
                      {item.date} · Google Review
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Reverse */}
        <div className="flex overflow-hidden py-1">
          <div className="animate-marquee-reverse flex items-stretch space-x-3.5 sm:space-x-4">
            {[...row2Reviews, ...row2Reviews].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className={`w-[250px] sm:w-[290px] md:w-[320px] flex-shrink-0 rounded-[18px] sm:rounded-[20px] p-4 sm:p-5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer ${item.bgColor}`}
              >
                {/* Quotation & Review Body */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-serif text-black/80 leading-none select-none">
                      “
                    </div>
                    {/* 5 Stars */}
                    <div className="flex items-center space-x-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p
                    dir={item.isArabic ? 'rtl' : 'ltr'}
                    className={`text-neutral-800 text-[11px] sm:text-xs leading-relaxed font-normal ${
                      item.isArabic ? 'font-sans text-right' : 'text-left'
                    }`}
                  >
                    {item.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-2.5 pt-3.5 mt-3 border-t border-black/5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-900 text-white font-semibold text-[10px] sm:text-xs flex items-center justify-center flex-shrink-0 shadow-2xs">
                    {item.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-xs text-neutral-900 leading-tight truncate">
                      {item.author}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-500 font-light mt-0.5">
                      {item.date} · Google Review
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
