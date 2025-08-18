import React from 'react'
import {Card, CardGroup} from '@/components/exports/for-home'

const BestPlayersSec = () => {
  return (
    <section className="bg-[var(--primary-dark-100)] px-6 py-16 text-white">

            <h2 className="text-3xl font-bold mb-6 text-[var(--primary-yellow-500)]">Best Players</h2>
                <CardGroup className="sm:grid-cols-4 pb-4">
                    <Card>
                        <div className="flex mb-3 gap-3 items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Erling_Haaland_2023.jpg" alt="Erling Haaland photo" className="object-cover rounded-full w-16 h-16" />
                            <div>
                                <h3 className="font-semibold text-white">
                                    Erling Haaland
                                </h3>
                                <div className='flex items-center gap-2 text-xs text-gray-300'>
                                    <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" alt="Man city logo" className="w-5 h-5" />
                                    <span>Manchester city</span>
                                </div>
                            </div>
                        </div>
                        <p className='mb-3 text-sm text-[var(--primary-light-500)] '>
                            {'Goals: '}
                            <span className='font-semibold text-[var(--primary-yellow-500)]'>7</span>
                            {' | Assists: 2'}
                        </p>
                        <button className="w-full bg-[var(--primary-yellow-500)] text-[var(--primary-dark-500)] p-1.5 font-semibold rounded-lg hover:bg-yellow-400">
                            View Profile
                        </button>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-semibold">Player 2</h3>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-semibold">Player 3</h3>
                    </Card>
                </CardGroup>
    </section>
  )
}
export default BestPlayersSec
