import { defineCollection,z } from "astro:content";

const proyectos = defineCollection({
    schema: z.object({
       
        title: z.string(),
        company: z.string(),
        img: z.string(),
        description: z.string() 
    })
})

export const collection = {proyectos}