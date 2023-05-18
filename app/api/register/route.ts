import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma/db/client'
import type { User } from '@prisma/client'
import { hash } from 'bcrypt'

export async function POST(req: NextRequest) {
  try {
    const userToRegister: User = await req.json()
    const hashedPassword = await hash(userToRegister.password, 12)

    const registeredUser = await prisma.user.create({
      data: {
        name: userToRegister.name,
        image: userToRegister.image,
        email: userToRegister.email,
        password: hashedPassword
      }
    })

    return new NextResponse(JSON.stringify(registeredUser), {
      status: 201,
      statusText: 'user created successfully'
    })
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      statusText: 'Internal Server Error'
    })
  }
}
