import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <Card className="w-full max-w-sm shadow-xl border-none">
        <CardContent className="flex flex-col gap-6 px-8 py-10">
          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" className="w-full" />
          </div>
          <CardFooter className="px-0 pt-4 flex justify-end">
            <Button className="bg-black cursor-pointer text-white hover:bg-gray-900 transition-colors font-semibold px-6 py-2 rounded-lg shadow-md">Login</Button>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page
