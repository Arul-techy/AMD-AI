<<<<<<< HEAD
import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { FiTarget, FiAward, FiUsers, FiCloud } from 'react-icons/fi'
=======
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { FiTarget, FiAward, FiUsers } from 'react-icons/fi'
>>>>>>> fa6124d (new update)

const MissionPoints = [
  'Deliver accurate and culturally relevant localization',
  'Support global AI development through high-quality data services',
  'Enable businesses to grow with fast and reliable digital solutions',
  'Create opportunities for young talent and freelancers worldwide',
]

<<<<<<< HEAD
export default function VisionMission(): JSX.Element {
=======
export default function VisionMission() {
>>>>>>> fa6124d (new update)
  const visionRef = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', { threshold: 0.1 })
  const missionRef = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', { threshold: 0.1 })

  return (
    <section id="vision-mission" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="h2-style text-2xl text-neutral-dark-text">Our Vision & Mission</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Vision Block */}
          <div ref={visionRef} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm opacity-0 translate-y-8 transition-all duration-600 ease-[cubic-bezier(0.22,0.9,0.3,1)]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-primary flex items-center justify-center text-white shadow-sm">
                  <FiTarget className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="h4-style text-xl text-gray-900">Vision</h3>
                <p className="text-body-sm mt-3 text-gray-700">
                  "To become a globally trusted language-tech partner by combining human intelligence and AI innovation to deliver affordable, scalable, and world-class digital services."
                </p>
              </div>
            </div>
          </div>

          {/* Mission Block */}
          <div ref={missionRef} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm opacity-0 translate-y-8 transition-all duration-600 ease-[cubic-bezier(0.22,0.9,0.3,1)]">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-secondary flex items-center justify-center text-white shadow-sm">
                  <FiAward className="w-6 h-6" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="h4-style text-xl text-gray-900">Mission</h3>
                <p className="text-body-sm mt-3 text-gray-700 mb-4">
                  Our mission drives how we operate and serve our clients—practical, scalable, and human-centered.
                </p>

                <ul className="space-y-3">
                  {MissionPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span className="mt-1 text-blue-primary"><FiUsers /></span>
                      <span className="text-body-xs text-gray-700">{pt}</span>
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
