import React from 'react'
import {CardGroup, Card} from '@/components/exports/for-home'

const ResultsSec = () => {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-[var(--primary-yellow-500)] mb-6">Latest Matches</h2>
      <CardGroup className="md:grid-cols-3 sm:grid-cols-2">
        <Card>Match 1</Card>
        <Card>Match 2</Card>
        <Card>Match 3</Card>
      </CardGroup>
    </section>
  )
}

export default ResultsSec
