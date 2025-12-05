import React from 'react'
import { FiTarget, FiAward, FiUsers, FiCloud } from 'react-icons/fi'

const MissionPoints = [
  'Deliver accurate and culturally relevant localization',
  'Support global AI development through high-quality data services',
  'Enable businesses to grow with fast and reliable digital solutions',
  'Create opportunities for young talent and freelancers worldwide',
]

export default function VisionMission(): JSX.Element {
  return (
    <section id="vision-mission" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">Our Vision &amp; Mission</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Vision Block */}
          <div className="fade-in slide-up bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-elegant-navy flex items-center justify-center text-elegant-porcelain shadow-sm">
                  <FiTarget className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Vision</h3>
                <p className="mt-3 text-gray-700 text-base">
                  “To become a globally trusted language-tech partner by combining human intelligence and AI innovation to deliver affordable, scalable, and world-class digital services.”
                </p>
              </div>
            </div>
          </div>

          {/* Mission Block */}
          <div className="fade-in slide-up bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-dynamic-bronze flex items-center justify-center text-dynamic-warmgray shadow-sm">
                  <FiAward className="w-6 h-6" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Mission</h3>
                <p className="mt-3 text-gray-700 text-base mb-4">
                  Our mission drives how we operate and serve our clients—practical, scalable, and human-centered.
                </p>

                <ul className="space-y-3">
                  {MissionPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span className="mt-1 text-elegant-navy"><FiUsers /></span>
                      <span className="text-gray-700">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
