import React from 'react'
import { Card, CardGroup } from '@/components/exports/for-home'

const ChartsSec = () => {
  return (
    <section className='px-6 py-16'>
        <h2 className="text-3xl font-bold text-[var(--primary-yellow-500)] mb-6 text-center">
            Match analytics
        </h2>
        <CardGroup className="md:grid-cols-2 gap-8">
            <Card>
                {/* Chart 1 content */}
            </Card>
            <Card>
                {/* Chart 2 content */}
            </Card>
        </CardGroup>
    </section>
  )
}

export default ChartsSec