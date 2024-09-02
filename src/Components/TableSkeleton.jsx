import React from 'react'

export default function TableSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-4 gap-4 mb-4">
        {/* Table header skeleton */}
        <div className="h-6 bg-gray-300 rounded col-span-1"></div>
        <div className="h-6 bg-gray-300 rounded col-span-1"></div>
        <div className="h-6 bg-gray-300 rounded col-span-1"></div>
        <div className="h-6 bg-gray-300 rounded col-span-1"></div>
      </div>

      {/* Table rows skeleton */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="grid grid-cols-4 gap-4 mb-2">
          <div className="h-4 bg-gray-200 rounded col-span-1"></div>
          <div className="h-4 bg-gray-200 rounded col-span-1"></div>
          <div className="h-4 bg-gray-200 rounded col-span-1"></div>
          <div className="h-4 bg-gray-200 rounded col-span-1"></div>
        </div>
      ))}
    </div>
  )
}
