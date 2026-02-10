import { Heart, MapPin, Calendar, Clock } from "lucide-react";
import { FloralDecoration } from "./FloralDecoration";
import { OrnamentalBorder } from "./OrnamentalBorder";
import { Car, Train } from "lucide-react";

export function WeddingInvitation() {
  return (
    <div className="max-w-2xl w-full bg-white rounded-lg shadow-2xl overflow-hidden relative">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="text-emerald-300">
          <path
            d="M0,0 Q30,0 50,20 Q70,40 100,40 L100,0 Z"
            fill="currentColor"
          />
          <circle
            cx="20"
            cy="20"
            r="3"
            fill="currentColor"
            opacity="0.6"
          />
          <circle
            cx="35"
            cy="15"
            r="2"
            fill="currentColor"
            opacity="0.4"
          />
          <circle
            cx="45"
            cy="25"
            r="2.5"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="text-emerald-300">
          <path
            d="M0,0 Q30,0 50,20 Q70,40 100,40 L100,0 Z"
            fill="currentColor"
          />
          <circle
            cx="20"
            cy="20"
            r="3"
            fill="currentColor"
            opacity="0.6"
          />
          <circle
            cx="35"
            cy="15"
            r="2"
            fill="currentColor"
            opacity="0.4"
          />
          <circle
            cx="45"
            cy="25"
            r="2.5"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Header with decorative border */}
      <div className="bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 p-8 border-b-4 border-emerald-200 relative overflow-hidden">
        {/* Decorative pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-1/4 w-16 h-16 border-2 border-emerald-400 rounded-full"></div>
          <div className="absolute bottom-4 right-1/4 w-12 h-12 border-2 border-emerald-400 rounded-full"></div>
        </div>

        <div className="text-center space-y-4 relative z-10">
          <FloralDecoration />
          <p className="text-emerald-700 tracking-[0.3em] text-sm uppercase">
            Together Forever
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-gradient-to-b from-white to-emerald-50/30 px-8 py-12 relative">
        {/* Side decorative elements */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-20">
          <OrnamentalBorder />
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 scale-x-[-1] opacity-20">
          <OrnamentalBorder />
        </div>

        {/* Names */}
        <div className="text-center space-y-6 mb-12 relative">
          {/* Decorative top flourish */}
          <div className="flex justify-center mb-6">
            <svg
              width="200"
              height="40"
              viewBox="0 0 200 40"
              className="text-emerald-400"
            >
              <path
                d="M10,20 Q50,5 100,20 Q150,35 190,20"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                opacity="0.6"
              />
              <circle
                cx="100"
                cy="20"
                r="4"
                fill="currentColor"
              />
              <circle
                cx="70"
                cy="15"
                r="2"
                fill="currentColor"
                opacity="0.6"
              />
              <circle
                cx="130"
                cy="15"
                r="2"
                fill="currentColor"
                opacity="0.6"
              />
              <circle
                cx="50"
                cy="12"
                r="1.5"
                fill="currentColor"
                opacity="0.4"
              />
              <circle
                cx="150"
                cy="12"
                r="1.5"
                fill="currentColor"
                opacity="0.4"
              />
            </svg>
          </div>

          <h1 className="text-4xl text-emerald-800 font-serif tracking-wide">
            Myo Ko
          </h1>
          <h1 className="text-4xl text-emerald-800 font-serif tracking-wide">
            &
          </h1>
          <h1 className="text-4xl text-emerald-800 font-serif tracking-wide">
            Zin Thi Thi Tun
          </h1>

          <div className="flex items-center justify-center gap-4">
            <svg
              width="80"
              height="2"
              className="text-emerald-300"
            >
              <line
                x1="0"
                y1="1"
                x2="80"
                y2="1"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <Heart className="w-5 h-5 text-pink-300 fill-pink-100" />
            <svg
              width="80"
              height="2"
              className="text-emerald-300"
            >
              <line
                x1="0"
                y1="1"
                x2="80"
                y2="1"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <p className="text-emerald-700 tracking-widest uppercase text-sm">
            Request the honor of your presence
          </p>

          <p className="text-xl text-gray-700">
            at the celebration of our marriage
          </p>

          {/* Decorative bottom flourish */}
          <div className="flex justify-center mt-6">
            <svg
              width="150"
              height="30"
              viewBox="0 0 150 30"
              className="text-emerald-400"
            >
              <path
                d="M5,15 Q35,5 75,15 Q115,25 145,15"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M20,20 Q45,15 75,20 Q105,25 130,20"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6 max-w-md mx-auto">
          {/* Date */}
          <div className="flex items-start gap-4 p-4 bg-emerald-50/50 rounded-lg border border-emerald-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
              <svg viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="currentColor"
                  className="text-emerald-600"
                />
              </svg>
            </div>
            <div className="bg-white p-2 rounded-full shadow-sm border-2 border-emerald-200">
              <Calendar className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="relative z-10">
              <p className="text-sm text-emerald-700 uppercase tracking-wide font-bold">
                Date
              </p>
              <p className="text-gray-800">
                Saturday, May 9th, 2026
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-start gap-4 p-4 bg-emerald-50/50 rounded-lg border border-emerald-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
              <svg viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="currentColor"
                  className="text-emerald-600"
                />
              </svg>
            </div>
            <div className="bg-white p-2 rounded-full shadow-sm border-2 border-emerald-200">
              <Clock className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="relative z-10">
              <p className="text-sm text-emerald-700 uppercase tracking-wide font-bold">
                Time
              </p>
              <p className="text-gray-800">10:00AM ~ 13:00AM</p>
            </div>
          </div>

          {/* Venue */}
          <div className="flex items-start gap-4 p-4 bg-emerald-50/50 rounded-lg border border-emerald-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
              <svg viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="currentColor"
                  className="text-emerald-600"
                />
              </svg>
            </div>
            <div className="bg-white p-2 rounded-full shadow-sm border-2 border-emerald-200">
              <MapPin className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="relative z-10">
              <p className="text-sm text-emerald-700 uppercase tracking-wide font-bold">
                Venue
              </p>
              <p className="text-gray-800">Satori Vihara</p>
              <p className="text-gray-600 text-sm">
                埼玉県東松山市上唐子1330-1
              </p>
            </div>
          </div>
        </div>

        {/* Access Information Section */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-16 bg-emerald-300"></div>
              <p className="text-emerald-700 tracking-wider uppercase text-sm font-bold">
                Access Information
              </p>
              <div className="h-px w-16 bg-emerald-300"></div>
            </div>
          </div>

          <div className="space-y-4">
            {/* By Train */}
            <div className="p-4 bg-emerald-50/50 rounded-lg border border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                <svg viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="currentColor"
                    className="text-emerald-600"
                  />
                </svg>
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <div className="bg-white p-2 rounded-full shadow-sm border-2 border-emerald-200 flex-shrink-0">
                  <Train className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-emerald-700 uppercase tracking-wide mb-2 font-bold">
                    By Train
                  </p>
                  <p className="text-gray-800 text-sm mb-1">
                    From Ikebukuro Station (池袋駅):
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Take the Tobu Tojo Line to Takasaka Station
                    (高坂駅).
                    <br />
                    Journey time: Approximately 1 hour
                    <br />
                    From Takasaka Station, take a taxi (約10分)
                  </p>
                </div>
              </div>
            </div>

            {/* By Car */}
            <div className="p-4 bg-emerald-50/50 rounded-lg border border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                <svg viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="currentColor"
                    className="text-emerald-600"
                  />
                </svg>
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <div className="bg-white p-2 rounded-full shadow-sm border-2 border-emerald-200 flex-shrink-0">
                  <Car className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-emerald-700 uppercase tracking-wide mb-2 font-bold">
                    By Car
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    From Kan-etsu Expressway:
                    <br />
                    Exit at Higashimatsuyama IC (東松山IC)
                    <br />
                    About 15 minutes drive
                    <br />
                    <span className="text-emerald-700 mt-1 inline-block">
                      Parking available on site
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RSVP Section */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center items-center gap-3 mb-4">
            <svg
              width="60"
              height="2"
              className="text-emerald-300"
            >
              <line
                x1="0"
                y1="1"
                x2="60"
                y2="1"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <div className="relative">
              <Heart className="w-6 h-6 text-emerald-500 fill-emerald-500" />
              <div className="absolute -top-1 -left-1 w-8 h-8 border border-emerald-300 rounded-full opacity-30"></div>
            </div>
            <svg
              width="60"
              height="2"
              className="text-emerald-300"
            >
              <line
                x1="0"
                y1="1"
                x2="60"
                y2="1"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <p className="text-emerald-700 tracking-wider">
            Please RSVP by March 10th, 2026
          </p>
          <p className="text-gray-600 text-sm">
            Contact: (080) 7027-8324
          </p>
        </div>

        {/* Decorative footer message */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 italic text-sm">
            We can&apos;t wait to celebrate with you!
          </p>
        </div>
      </div>

      {/* Decorative footer */}
      <div className="bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 p-6 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 left-1/3 w-8 h-8 border border-emerald-400 rotate-45"></div>
          <div className="absolute bottom-2 right-1/3 w-6 h-6 border border-emerald-400 rotate-45"></div>
        </div>

        <div className="flex justify-center items-center gap-2 relative z-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          <div className="relative flex-shrink-0">
            <Heart className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <svg
              className="absolute -inset-2"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                className="text-emerald-400"
                opacity="0.4"
              />
            </svg>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
        </div>
      </div>

      {/* Bottom corner decorations */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 transform scale-y-[-1]">
        <svg viewBox="0 0 100 100" className="text-emerald-300">
          <path
            d="M0,0 Q30,0 50,20 Q70,40 100,40 L100,0 Z"
            fill="currentColor"
          />
          <circle
            cx="20"
            cy="20"
            r="3"
            fill="currentColor"
            opacity="0.6"
          />
          <circle
            cx="35"
            cy="15"
            r="2"
            fill="currentColor"
            opacity="0.4"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 transform scale-[-1]">
        <svg viewBox="0 0 100 100" className="text-emerald-300">
          <path
            d="M0,0 Q30,0 50,20 Q70,40 100,40 L100,0 Z"
            fill="currentColor"
          />
          <circle
            cx="20"
            cy="20"
            r="3"
            fill="currentColor"
            opacity="0.6"
          />
          <circle
            cx="35"
            cy="15"
            r="2"
            fill="currentColor"
            opacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}