import { Router } from "express";

const estudianteRouter = Router();

const estudiantes = [
    {codigo: '001', nombre: 'Juan'},
    {codigo: '002', nombre: 'Pedro'},
    {codigo: '003', nombre: 'Maria'},
    {codigo: '004', nombre: 'Ana'},
    {codigo: '005', nombre: 'Luis'}
];  

estudianteRouter.get('/', (req, res)=>{
    res.status(200).json(estudiantes);
});


estudianteRouter.get('/estudiante/:codigo', (req,res)=>{

    if(req.headers.role !== 'admin'){
        res.status(403).send('No tiene permisos para acceder a esta información');
        return;
    }

    const estudiante = estudiantes.find((est)=> est.codigo === req.params.codigo);
    if(estudiante){
       res.status(200).json(estudiante);
    } else {
        res.status(404).send(`No se encontró información del estudiante con código: ${req.params.codigo}`);
    }
});
