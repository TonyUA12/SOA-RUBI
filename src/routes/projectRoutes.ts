import { Router } from 'express';
import { ProjectController } from '../controllers/ProjectController';
import { body, param } from 'express-validator';
import { handleInputErrors } from '../middleware/validation';
const router = Router();

router.post('/',
    body('entityName')
        .notEmpty().withMessage('El nombre de la empresa es Obligatoria'),
    body('datePublished')
        .notEmpty().withMessage('La fecha del proyecto es obligatoria'),
    body('nomenclature')
        .notEmpty().withMessage('El nomenclatura del proyecto es Obligatoria'),
    body('description')
        .notEmpty().withMessage('La descripcion del proyecto es Obligatoria'),
    body('endTenderDate')
        .notEmpty().withMessage('La fecha de termino es obligatoria'),
    handleInputErrors,
    ProjectController.createProject
);

router.get('/', ProjectController.getAllProjects);
router.get('/:id',
    param('id').isMongoId().withMessage('ID no Válido'),
    handleInputErrors,
    ProjectController.getProjectById
);
router.put('/:id',
    param('id').isMongoId().withMessage('ID no Válido'),
    body('entityName')
        .notEmpty().withMessage('El nombre de la empresa es Obligatoria'),
    body('datePublished')
        .notEmpty().withMessage('La fecha del proyecto es obligatoria'),
    body('nomenclature')
        .notEmpty().withMessage('El nomenclatura del proyecto es Obligatoria'),
    body('description')
        .notEmpty().withMessage('La descripcion del proyecto es Obligatoria'),
    body('endTenderDate')
        .notEmpty().withMessage('La fecha de termino es obligatoria'),
    handleInputErrors,
    ProjectController.updateProject);
export default router;

router.delete('/:id',
    param('id').isMongoId().withMessage('ID no Válido'),
    handleInputErrors,
    ProjectController.deleteProject
);