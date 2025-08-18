import React from 'react'
import {CardGroup, Card} from '@/components/exports/for-home'
import {default as InnerResult} from './InnerResult'

const ResultsSec = () => {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-[var(--primary-yellow-500)] mb-6">Latest Matches</h2>
      <CardGroup className="sm:grid-cols-2">
        <Card><InnerResult /></Card>
        <Card><InnerResult /></Card>
      </CardGroup>
    </section>
  )
}

export default ResultsSec
