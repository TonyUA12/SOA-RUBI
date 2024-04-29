import type { Request, Response } from "express"
import Project from "../models/Project";

export class ProjectController{

    static createProject = async (req:Request, res:Response) =>{

        const project = new Project(req.body);

        try{
            await project.save()
            res.send('Licitaciones creadas');
        } catch(error) {
            console.log(error);
        }
    }

    static getAllProjects = async (req:Request, res:Response) =>{

        try {

            const projects = await Project.find({});
            res.json(projects);

        } catch (error) {
            
            console.log(error)            
        }
    }


    static getProjectById = async (req: Request, res: Response) => {
        const {id} = req.params
        console.log(id)
        try {
            const project = await  Project.findById(id)
 
            if(!project){
                const error= new Error('Proyecto no encontrado')
                return res.status(404).json({error: error.message})
            }
            res.json(project)
        } catch (error) {
            console.log(error)
        }
    }

    static updateProject = async (req: Request, res: Response) => {
        const {id} = req.params
        console.log(id)
        try {
            const project = await Project.findByIdAndUpdate(id, req.body);
            if(!project){
                const error= new Error('Proyecto no encontrado')
                return res.status(404).json({error: error.message})
            }
            await project.save();
            res.send('Proyecyo Actualizado');
        } catch (error) {
            console.log(error)
        }
    }

    static deleteProject = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const project = await Project.findByIdAndDelete(id);
            if(!project){
                const error= new Error('Proyecto no encontrado')
                return res.status(404).json({error: error.message})
            }
            res.send('Eliminando Proyecto...')
        } catch (error) {
            console.log(error)
        }
    }

}