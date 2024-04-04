import { useState } from "react"

export const useGetCallById = (id: string | string[]) => {
    const [call, setCall] = useState<CallTrackerCall>()
} 
