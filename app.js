/* =========================================================
   Muebles Cotrina — app.js (Vanilla JS, sin frameworks)
   Modelo de datos de referencia (MySQL 8.x):
     items_inventario, materias_primas, productos_terminados,
     caracteristicas_materia_prima, caracteristicas_producto,
     ubicaciones, existencias, movimientos_inventario, usuarios
   ========================================================= */

'use strict';

/* =========================================================
   1. DATOS MOCK (estructura espejo del modelo relacional)
   Para migrar a backend: reemplazar el cuerpo de cada método
   de `api` por fetch('/api/...')
   ========================================================= */

const db = {
  items_inventario: [
    // ---- MATERIAS PRIMAS ----
    { id_item: 1,  codigo: 'MP-001', nombre: 'Melamina blanca',                categoria: 'Tableros',      unidad_medida: 'plancha', tipo: 'MP', marca: 'Arauco',        stock_minimo: 10, costo_unitario: 385.00, observaciones: 'Plancha 2440x1830 mm', estado: 'activo', created_at: '2026-01-05', updated_at: '2026-08-20' },
    { id_item: 2,  codigo: 'MP-002', nombre: 'Melamina negra',                categoria: 'Tableros',      unidad_medida: 'plancha', tipo: 'MP', marca: 'Arauco',        stock_minimo: 8,  costo_unitario: 392.50, observaciones: '', estado: 'activo', created_at: '2026-01-05', updated_at: '2026-08-18' },
    { id_item: 3,  codigo: 'MP-003', nombre: 'Melamina blanca - Retazo',      categoria: 'Tableros',      unidad_medida: 'pieza',   tipo: 'MP', marca: 'Arauco',        stock_minimo: 4,  costo_unitario: 60.00,  observaciones: 'Retazos reutilizables de melamina blanca', estado: 'activo', created_at: '2026-02-11', updated_at: '2026-08-21' },
    { id_item: 4,  codigo: 'MP-004', nombre: 'Bisagra central',               categoria: 'Herrajes',      unidad_medida: 'unidad',  tipo: 'MP', marca: 'Amix',          stock_minimo: 40, costo_unitario: 8.50,   observaciones: '', estado: 'activo', created_at: '2026-01-12', updated_at: '2026-08-19' },
    { id_item: 5,  codigo: 'MP-005', nombre: 'Bisagra interior',              categoria: 'Herrajes',      unidad_medida: 'unidad',  tipo: 'MP', marca: 'Amix',          stock_minimo: 40, costo_unitario: 7.80,   observaciones: '', estado: 'activo', created_at: '2026-01-12', updated_at: '2026-08-19' },
    { id_item: 6,  codigo: 'MP-006', nombre: 'Bisagra lateral',               categoria: 'Herrajes',      unidad_medida: 'unidad',  tipo: 'MP', marca: 'Amix',          stock_minimo: 30, costo_unitario: 7.20,   observaciones: '', estado: 'inactivo', created_at: '2026-01-12', updated_at: '2026-07-02' },
    { id_item: 7,  codigo: 'MP-007', nombre: 'Cables',                        categoria: 'Eléctricos',    unidad_medida: 'metro',   tipo: 'MP', marca: 'Condumex',      stock_minimo: 50, costo_unitario: 12.00,  observaciones: '', estado: 'activo', created_at: '2026-01-15', updated_at: '2026-08-01' },
    { id_item: 8,  codigo: 'MP-008', nombre: 'Canoplas',                     categoria: 'Iluminación',   unidad_medida: 'unidad',  tipo: 'MP', marca: 'Genérica',      stock_minimo: 25, costo_unitario: 15.00,  observaciones: '', estado: 'activo', created_at: '2026-01-15', updated_at: '2026-08-10' },
    { id_item: 9,  codigo: 'MP-009', nombre: 'Chapas',                        categoria: 'Accesorios',    unidad_medida: 'juego',   tipo: 'MP', marca: 'Tesa',          stock_minimo: 15, costo_unitario: 45.00,  observaciones: '', estado: 'activo', created_at: '2026-01-20', updated_at: '2026-08-12' },
    { id_item: 10, codigo: 'MP-010', nombre: 'Cinta negra',                   categoria: 'Insumos',       unidad_medida: 'rollo',   tipo: 'MP', marca: '3M',            stock_minimo: 10, costo_unitario: 22.00,  observaciones: '', estado: 'activo', created_at: '2026-01-20', updated_at: '2026-08-14' },
    { id_item: 11, codigo: 'MP-011', nombre: 'Clavos',                        categoria: 'Ferretería',    unidad_medida: 'kg',      tipo: 'MP', marca: 'Genérica',      stock_minimo: 5,  costo_unitario: 28.00,  observaciones: '', estado: 'activo', created_at: '2026-01-22', updated_at: '2026-08-16' },
    { id_item: 12, codigo: 'MP-012', nombre: 'Conectores',                    categoria: 'Eléctricos',    unidad_medida: 'unidad',  tipo: 'MP', marca: 'Leviton',       stock_minimo: 30, costo_unitario: 9.50,   observaciones: '', estado: 'activo', created_at: '2026-01-22', updated_at: '2026-08-05' },
    { id_item: 13, codigo: 'MP-013', nombre: 'Corredera 10"',                 categoria: 'Herrajes',      unidad_medida: 'par',     tipo: 'MP', marca: 'Hafele',        stock_minimo: 20, costo_unitario: 68.00,  observaciones: '', estado: 'activo', created_at: '2026-02-01', updated_at: '2026-08-17' },
    { id_item: 14, codigo: 'MP-014', nombre: 'Corredera 12"',                 categoria: 'Herrajes',      unidad_medida: 'par',     tipo: 'MP', marca: 'Hafele',        stock_minimo: 20, costo_unitario: 75.00,  observaciones: '', estado: 'activo', created_at: '2026-02-01', updated_at: '2026-08-17' },
    { id_item: 15, codigo: 'MP-015', nombre: 'Corredera 12" liviana',         categoria: 'Herrajes',      unidad_medida: 'par',     tipo: 'MP', marca: 'Hettich',       stock_minimo: 15, costo_unitario: 62.00,  observaciones: '', estado: 'activo', created_at: '2026-02-01', updated_at: '2026-08-09' },
    { id_item: 16, codigo: 'MP-016', nombre: 'Corredera 12" pesada',          categoria: 'Herrajes',      unidad_medida: 'par',     tipo: 'MP', marca: 'Hettich',       stock_minimo: 15, costo_unitario: 88.00,  observaciones: '', estado: 'activo', created_at: '2026-02-01', updated_at: '2026-08-09' },
    { id_item: 17, codigo: 'MP-017', nombre: 'Corredera 14" pesada',          categoria: 'Herrajes',      unidad_medida: 'par',     tipo: 'MP', marca: 'Hafele',        stock_minimo: 10, costo_unitario: 96.00,  observaciones: '', estado: 'activo', created_at: '2026-02-01', updated_at: '2026-08-03' },
    { id_item: 18, codigo: 'MP-018', nombre: 'Deslizadores',                  categoria: 'Herrajes',      unidad_medida: 'unidad',  tipo: 'MP', marca: 'Amix',          stock_minimo: 25, costo_unitario: 5.40,   observaciones: '', estado: 'activo', created_at: '2026-02-03', updated_at: '2026-07-28' },
    { id_item: 19, codigo: 'MP-019', nombre: 'Enchufes',                      categoria: 'Eléctricos',    unidad_medida: 'unidad',  tipo: 'MP', marca: 'Leviton',       stock_minimo: 20, costo_unitario: 18.00,  observaciones: '', estado: 'activo', created_at: '2026-02-05', updated_at: '2026-08-11' },
    { id_item: 20, codigo: 'MP-020', nombre: 'Film',                          categoria: 'Empaque',       unidad_medida: 'rollo',   tipo: 'MP', marca: 'Genérica',      stock_minimo: 6,  costo_unitario: 55.00,  observaciones: '', estado: 'activo', created_at: '2026-02-08', updated_at: '2026-08-06' },
    { id_item: 21, codigo: 'MP-021', nombre: 'Focos LED',                     categoria: 'Iluminación',   unidad_medida: 'unidad',  tipo: 'MP', marca: 'Philips',       stock_minimo: 30, costo_unitario: 24.00,  observaciones: '', estado: 'activo', created_at: '2026-02-08', updated_at: '2026-08-13' },
    { id_item: 22, codigo: 'MP-022', nombre: 'Jaladores',                     categoria: 'Accesorios',    unidad_medida: 'unidad',  tipo: 'MP', marca: 'Amix',          stock_minimo: 35, costo_unitario: 11.00,  observaciones: '', estado: 'activo', created_at: '2026-02-10', updated_at: '2026-08-15' },
    { id_item: 23, codigo: 'MP-023', nombre: 'Manijas',                       categoria: 'Accesorios',    unidad_medida: 'unidad',  tipo: 'MP', marca: 'Amix',          stock_minimo: 35, costo_unitario: 14.00,  observaciones: '', estado: 'activo', created_at: '2026-02-10', updated_at: '2026-08-15' },
    { id_item: 24, codigo: 'MP-024', nombre: 'Pegamento',                     categoria: 'Adhesivos',     unidad_medida: 'litro',   tipo: 'MP', marca: 'Resicol',       stock_minimo: 8,  costo_unitario: 92.00,  observaciones: '', estado: 'activo', created_at: '2026-02-12', updated_at: '2026-08-20' },
    { id_item: 25, codigo: 'MP-025', nombre: 'Percheros',                     categoria: 'Accesorios',    unidad_medida: 'unidad',  tipo: 'MP', marca: 'Genérica',      stock_minimo: 20, costo_unitario: 9.00,   observaciones: '', estado: 'activo', created_at: '2026-02-12', updated_at: '2026-08-02' },
    { id_item: 26, codigo: 'MP-026', nombre: 'Pistones',                      categoria: 'Herrajes',      unidad_medida: 'unidad',  tipo: 'MP', marca: 'Titan',         stock_minimo: 15, costo_unitario: 32.00,  observaciones: '', estado: 'activo', created_at: '2026-02-14', updated_at: '2026-07-30' },
    { id_item: 27, codigo: 'MP-027', nombre: 'Push',                          categoria: 'Herrajes',      unidad_medida: 'unidad',  tipo: 'MP', marca: 'Amix',          stock_minimo: 20, costo_unitario: 6.50,   observaciones: '', estado: 'activo', created_at: '2026-02-14', updated_at: '2026-07-30' },
    { id_item: 28, codigo: 'MP-028', nombre: 'Tapitas adhesivas',             categoria: 'Insumos',       unidad_medida: 'bolsa',   tipo: 'MP', marca: 'Genérica',      stock_minimo: 12, costo_unitario: 16.00,  observaciones: '', estado: 'activo', created_at: '2026-02-16', updated_at: '2026-08-04' },
    { id_item: 29, codigo: 'MP-029', nombre: 'Thinner',                       categoria: 'Adhesivos',     unidad_medida: 'litro',   tipo: 'MP', marca: 'Pintex',        stock_minimo: 5,  costo_unitario: 48.00,  observaciones: 'Material inflamable', estado: 'activo', created_at: '2026-02-18', updated_at: '2026-08-08' },
    { id_item: 30, codigo: 'MP-030', nombre: 'Tornillos 4x50',                categoria: 'Ferretería',    unidad_medida: 'unidad',  tipo: 'MP', marca: 'Fersa',         stock_minimo: 300, costo_unitario: 1.20,  observaciones: '', estado: 'activo', created_at: '2026-01-25', updated_at: '2026-08-19' },
    { id_item: 31, codigo: 'MP-031', nombre: 'Tornillos 4x30',                categoria: 'Ferretería',    unidad_medida: 'unidad',  tipo: 'MP', marca: 'Fersa',         stock_minimo: 250, costo_unitario: 0.90,  observaciones: '', estado: 'activo', created_at: '2026-01-25', updated_at: '2026-08-19' },

    // ---- PRODUCTOS TERMINADOS ----
    { id_item: 100, codigo: 'PT-001', nombre: '5 puertas',                     categoria: 'Roperos',           unidad_medida: 'unidad', tipo: 'PT', stock_minimo: 2, costo_fabricacion: 4200.00, precio_venta: 6500.00, observaciones: '', estado: 'activo', created_at: '2026-03-02', updated_at: '2026-08-18' },
    { id_item: 101, codigo: 'PT-002', nombre: 'Torres',                       categoria: 'Roperos',           unidad_medida: 'unidad', tipo: 'PT', stock_minimo: 2, costo_fabricacion: 3100.00, precio_venta: 4800.00, observaciones: '', estado: 'activo', created_at: '2026-03-02', updated_at: '2026-08-18' },
    { id_item: 102, codigo: 'PT-003', nombre: 'Puertas Largas 7 Cajones',     categoria: 'Cómodas',           unidad_medida: 'unidad', tipo: 'PT', stock_minimo: 1, costo_fabricacion: 5200.00, precio_venta: 7900.00, observaciones: '', estado: 'activo', created_at: '2026-03-10', updated_at: '2026-08-15' },
    { id_item: 103, codigo: 'PT-004', nombre: 'Tocador',                      categoria: 'Tocadores',         unidad_medida: 'unidad', tipo: 'PT', stock_minimo: 1, costo_fabricacion: 2800.00, precio_venta: 4300.00, observaciones: '', estado: 'activo', created_at: '2026-03-10', updated_at: '2026-08-15' },
    { id_item: 104, codigo: 'PT-005', nombre: 'Puerta Larga',                 categoria: 'Puertas',           unidad_medida: 'unidad', tipo: 'PT', stock_minimo: 3, costo_fabricacion: 900.00,  precio_venta: 1500.00, observaciones: '', estado: 'activo', created_at: '2026-03-15', updated_at: '2026-08-12' },
    { id_item: 105, codigo: 'PT-006', nombre: 'Puertas Corredizas',           categoria: 'Puertas',           unidad_medida: 'par',    tipo: 'PT', stock_minimo: 2, costo_fabricacion: 1900.00, precio_venta: 3200.00, observaciones: '', estado: 'activo', created_at: '2026-03-15', updated_at: '2026-08-12' },
    { id_item: 106, codigo: 'PT-007', nombre: 'Corredizo',                    categoria: 'Roperos',           unidad_medida: 'unidad', tipo: 'PT', stock_minimo: 1, costo_fabricacion: 3800.00, precio_venta: 5900.00, observaciones: '', estado: 'activo', created_at: '2026-03-20', updated_at: '2026-08-10' },
    { id_item: 107, codigo: 'PT-008', nombre: 'Corredizo cajones Melamine',   categoria: 'Roperos',           unidad_medida: 'unidad', tipo: 'PT', stock_minimo: 1, costo_fabricacion: 4500.00, precio_venta: 7000.00, observaciones: '', estado: 'inactivo', created_at: '2026-03-20', updated_at: '2026-06-25' }
  ],

  caracteristicas: [
    // Materias primas (caracteristicas_materia_prima)
    { id_caracteristica: 1,  id_item: 1,  nombre: 'Largo',   valor: '2440',    unidad: 'mm' },
    { id_caracteristica: 2,  id_item: 1,  nombre: 'Ancho',   valor: '1830',    unidad: 'mm' },
    { id_caracteristica: 3,  id_item: 1,  nombre: 'Espesor', valor: '18',      unidad: 'mm' },
    { id_caracteristica: 4,  id_item: 1,  nombre: 'Color',   valor: 'Blanco',  unidad: '-' },
    { id_caracteristica: 5,  id_item: 1,  nombre: 'Acabado', valor: 'Mate',    unidad: '-' },
    { id_caracteristica: 6,  id_item: 2,  nombre: 'Espesor', valor: '18',      unidad: 'mm' },
    { id_caracteristica: 7,  id_item: 2,  nombre: 'Color',   valor: 'Negro',   unidad: '-' },
    { id_caracteristica: 8,  id_item: 3,  nombre: 'Tipo',    valor: 'Retazo',  unidad: '-' },
    { id_caracteristica: 9,  id_item: 3,  nombre: 'Largo',   valor: '800',     unidad: 'mm' },
    { id_caracteristica: 10, id_item: 3,  nombre: 'Ancho',   valor: '450',     unidad: 'mm' },
    { id_caracteristica: 11, id_item: 3,  nombre: 'Espesor', valor: '18',      unidad: 'mm' },
    { id_caracteristica: 12, id_item: 3,  nombre: 'Color',   valor: 'Blanco',  unidad: '-' },
    { id_caracteristica: 13, id_item: 13, nombre: 'Medida',  valor: '10"',     unidad: '-' },
    { id_caracteristica: 14, id_item: 13, nombre: 'Carga',   valor: '25',      unidad: 'kg' },
    { id_caracteristica: 15, id_item: 30, nombre: 'Diámetro',valor: '4',       unidad: 'mm' },
    { id_caracteristica: 16, id_item: 30, nombre: 'Largo',   valor: '50',      unidad: 'mm' },
    { id_caracteristica: 17, id_item: 29, nombre: 'Tipo',    valor: 'Thinner estándar', unidad: '-' },

    // Productos terminados (caracteristicas_producto)
    { id_caracteristica: 18, id_item: 100, nombre: 'Largo',   valor: '150', unidad: 'cm' },
    { id_caracteristica: 19, id_item: 100, nombre: 'Ancho',   valor: '220', unidad: 'cm' },
    { id_caracteristica: 20, id_item: 100, nombre: 'Alto',    valor: '47',  unidad: 'cm' },
    { id_caracteristica: 21, id_item: 100, nombre: 'Color',   valor: 'Blanco', unidad: '-' },
    { id_caracteristica: 22, id_item: 102, nombre: 'Largo',   valor: '120', unidad: 'cm' },
    { id_caracteristica: 23, id_item: 102, nombre: 'Alto',    valor: '200', unidad: 'cm' },
    { id_caracteristica: 24, id_item: 104, nombre: 'Largo',   valor: '90',  unidad: 'cm' },
    { id_caracteristica: 25, id_item: 104, nombre: 'Alto',    valor: '210', unidad: 'cm' },
    { id_caracteristica: 26, id_item: 105, nombre: 'Largo',   valor: '180', unidad: 'cm' },
    { id_caracteristica: 27, id_item: 106, nombre: 'Largo',   valor: '240', unidad: 'cm' }
  ],

  ubicaciones: [
    { id_ubicacion: 1, nombre: 'Almacén principal', tipo: 'Almacén', descripcion: 'Almacén central de materias primas y producto terminado', estado: 'activo', created_at: '2026-01-05' },
    { id_ubicacion: 2, nombre: 'Taller 1',          tipo: 'Taller',  descripcion: 'Área de fabricación principal',                           estado: 'activo', created_at: '2026-01-05' },
    { id_ubicacion: 3, nombre: 'Taller 2',          tipo: 'Taller',  descripcion: 'Área de acabados y ensamble',                             estado: 'activo', created_at: '2026-01-05' },
    { id_ubicacion: 4, nombre: 'Local de ventas',   tipo: 'Local',   descripcion: 'Exhibición y despacho a clientes',                        estado: 'activo', created_at: '2026-01-06' }
  ],

  existencias: [
    { id_existencia: 1,  id_item: 1,  id_ubicacion: 1, cantidad: 20, created_at: '2026-06-01', updated_at: '2026-08-20' },
    { id_existencia: 2,  id_item: 1,  id_ubicacion: 2, cantidad: 3,  created_at: '2026-06-01', updated_at: '2026-08-18' },
    { id_existencia: 3,  id_item: 2,  id_ubicacion: 1, cantidad: 12, created_at: '2026-06-01', updated_at: '2026-08-18' },
    { id_existencia: 4,  id_item: 3,  id_ubicacion: 2, cantidad: 6,  created_at: '2026-06-10', updated_at: '2026-08-21' },
    { id_existencia: 5,  id_item: 4,  id_ubicacion: 1, cantidad: 120,created_at: '2026-06-01', updated_at: '2026-08-19' },
    { id_existencia: 6,  id_item: 5,  id_ubicacion: 1, cantidad: 35, created_at: '2026-06-01', updated_at: '2026-08-19' },
    { id_existencia: 7,  id_item: 6,  id_ubicacion: 1, cantidad: 10, created_at: '2026-06-01', updated_at: '2026-07-02' },
    { id_existencia: 8,  id_item: 7,  id_ubicacion: 1, cantidad: 80, created_at: '2026-06-01', updated_at: '2026-08-01' },
    { id_existencia: 9,  id_item: 8,  id_ubicacion: 1, cantidad: 18, created_at: '2026-06-01', updated_at: '2026-08-10' },
    { id_existencia: 10, id_item: 9,  id_ubicacion: 1, cantidad: 22, created_at: '2026-06-01', updated_at: '2026-08-12' },
    { id_existencia: 11, id_item: 10, id_ubicacion: 1, cantidad: 14, created_at: '2026-06-01', updated_at: '2026-08-14' },
    { id_existencia: 12, id_item: 11, id_ubicacion: 1, cantidad: 9,  created_at: '2026-06-01', updated_at: '2026-08-16' },
    { id_existencia: 13, id_item: 12, id_ubicacion: 1, cantidad: 55, created_at: '2026-06-01', updated_at: '2026-08-05' },
    { id_existencia: 14, id_item: 13, id_ubicacion: 1, cantidad: 26, created_at: '2026-06-01', updated_at: '2026-08-17' },
    { id_existencia: 15, id_item: 13, id_ubicacion: 2, cantidad: 4,  created_at: '2026-06-01', updated_at: '2026-08-17' },
    { id_existencia: 16, id_item: 14, id_ubicacion: 1, cantidad: 31, created_at: '2026-06-01', updated_at: '2026-08-17' },
    { id_existencia: 17, id_item: 15, id_ubicacion: 1, cantidad: 8,  created_at: '2026-06-01', updated_at: '2026-08-09' },
    { id_existencia: 18, id_item: 16, id_ubicacion: 1, cantidad: 17, created_at: '2026-06-01', updated_at: '2026-08-09' },
    { id_existencia: 19, id_item: 17, id_ubicacion: 1, cantidad: 6,  created_at: '2026-06-01', updated_at: '2026-08-03' },
    { id_existencia: 20, id_item: 18, id_ubicacion: 1, cantidad: 40, created_at: '2026-06-01', updated_at: '2026-07-28' },
    { id_existencia: 21, id_item: 19, id_ubicacion: 1, cantidad: 26, created_at: '2026-06-01', updated_at: '2026-08-11' },
    { id_existencia: 22, id_item: 20, id_ubicacion: 1, cantidad: 3,  created_at: '2026-06-01', updated_at: '2026-08-06' },
    { id_existencia: 23, id_item: 21, id_ubicacion: 1, cantidad: 48, created_at: '2026-06-01', updated_at: '2026-08-13' },
    { id_existencia: 24, id_item: 22, id_ubicacion: 1, cantidad: 60, created_at: '2026-06-01', updated_at: '2026-08-15' },
    { id_existencia: 25, id_item: 23, id_ubicacion: 1, cantidad: 52, created_at: '2026-06-01', updated_at: '2026-08-15' },
    { id_existencia: 26, id_item: 24, id_ubicacion: 2, cantidad: 11, created_at: '2026-06-01', updated_at: '2026-08-20' },
    { id_existencia: 27, id_item: 25, id_ubicacion: 1, cantidad: 33, created_at: '2026-06-01', updated_at: '2026-08-02' },
    { id_existencia: 28, id_item: 26, id_ubicacion: 1, cantidad: 19, created_at: '2026-06-01', updated_at: '2026-07-30' },
    { id_existencia: 29, id_item: 27, id_ubicacion: 1, cantidad: 28, created_at: '2026-06-01', updated_at: '2026-07-30' },
    { id_existencia: 30, id_item: 28, id_ubicacion: 1, cantidad: 15, created_at: '2026-06-01', updated_at: '2026-08-04' },
    { id_existencia: 31, id_item: 29, id_ubicacion: 1, cantidad: 7,  created_at: '2026-06-01', updated_at: '2026-08-08' },
    { id_existencia: 32, id_item: 30, id_ubicacion: 1, cantidad: 850,created_at: '2026-06-01', updated_at: '2026-08-19' },
    { id_existencia: 33, id_item: 30, id_ubicacion: 2, cantidad: 140,created_at: '2026-06-01', updated_at: '2026-08-19' },
    { id_existencia: 34, id_item: 31, id_ubicacion: 1, cantidad: 210,created_at: '2026-06-01', updated_at: '2026-08-19' },
    { id_existencia: 35, id_item: 100, id_ubicacion: 4, cantidad: 4, created_at: '2026-07-01', updated_at: '2026-08-18' },
    { id_existencia: 36, id_item: 101, id_ubicacion: 1, cantidad: 3, created_at: '2026-07-01', updated_at: '2026-08-18' },
    { id_existencia: 37, id_item: 102, id_ubicacion: 4, cantidad: 2, created_at: '2026-07-01', updated_at: '2026-08-15' },
    { id_existencia: 38, id_item: 103, id_ubicacion: 4, cantidad: 1, created_at: '2026-07-01', updated_at: '2026-08-15' },
    { id_existencia: 39, id_item: 104, id_ubicacion: 1, cantidad: 6, created_at: '2026-07-01', updated_at: '2026-08-12' },
    { id_existencia: 40, id_item: 104, id_ubicacion: 4, cantidad: 2, created_at: '2026-07-01', updated_at: '2026-08-12' },
    { id_existencia: 41, id_item: 105, id_ubicacion: 1, cantidad: 1, created_at: '2026-07-01', updated_at: '2026-08-12' },
    { id_existencia: 42, id_item: 106, id_ubicacion: 4, cantidad: 1, created_at: '2026-07-01', updated_at: '2026-08-10' }
  ],

  movimientos_inventario: [
    { id_movimiento: 1,  id_item: 1,  id_ubicacion_origen: null, id_ubicacion_destino: 1, tipo_movimiento: 'Entrada',          cantidad: 25, motivo: 'Compra',                  observaciones: 'Factura A-1182', fecha_movimiento: '2026-08-20 09:15', id_usuario: 1, usuario_nombre: 'Carlos Álvarez' },
    { id_movimiento: 2,  id_item: 1,  id_ubicacion_origen: 1,    id_ubicacion_destino: 2, tipo_movimiento: 'Transferencia',    cantidad: 3,  motivo: 'Reabastecimiento taller', observaciones: '', fecha_movimiento: '2026-08-18 10:02', id_usuario: 2, usuario_nombre: 'Julia Pérez' },
    { id_movimiento: 3,  id_item: 1,  id_ubicacion_origen: 2,    id_ubicacion_destino: null, tipo_movimiento: 'Consumo',       cantidad: 2,  motivo: 'Producción',              observaciones: 'OT-0041 Ropero 5 puertas', fecha_movimiento: '2026-08-18 14:40', id_usuario: 3, usuario_nombre: 'Miguel Torres' },
    { id_movimiento: 4,  id_item: 30, id_ubicacion_origen: 1,    id_ubicacion_destino: 2, tipo_movimiento: 'Transferencia',    cantidad: 150,motivo: 'Producción',              observaciones: 'Lote para taller', fecha_movimiento: '2026-08-19 08:30', id_usuario: 2, usuario_nombre: 'Julia Pérez' },
    { id_movimiento: 5,  id_item: 100,id_ubicacion_origen: null, id_ubicacion_destino: 4, tipo_movimiento: 'Entrada',          cantidad: 2,  motivo: 'Producción',              observaciones: 'Alta de producto terminado OT-0041', fecha_movimiento: '2026-08-18 17:05', id_usuario: 3, usuario_nombre: 'Miguel Torres' },
    { id_movimiento: 6,  id_item: 24, id_ubicacion_origen: null, id_ubicacion_destino: 2, tipo_movimiento: 'Entrada',          cantidad: 4,  motivo: 'Compra',                  observaciones: 'Factura B-0771', fecha_movimiento: '2026-08-20 11:48', id_usuario: 1, usuario_nombre: 'Carlos Álvarez' },
    { id_movimiento: 7,  id_item: 20, id_ubicacion_origen: 1,    id_ubicacion_destino: null, tipo_movimiento: 'Salida',        cantidad: 1,  motivo: 'Empaque',                 observaciones: 'Pedido cliente Ferretería del Sur', fecha_movimiento: '2026-08-21 16:20', id_usuario: 2, usuario_nombre: 'Julia Pérez' },
    { id_movimiento: 8,  id_item: 17, id_ubicacion_origen: 1,    id_ubicacion_destino: null, tipo_movimiento: 'Ajuste negativo',cantidad: 2, motivo: 'Inventario físico',       observaciones: 'Diferencia en conteo', fecha_movimiento: '2026-08-15 12:00', id_usuario: 1, usuario_nombre: 'Carlos Álvarez' },
    { id_movimiento: 9,  id_item: 13, id_ubicacion_origen: null, id_ubicacion_destino: 1, tipo_movimiento: 'Entrada',          cantidad: 15, motivo: 'Compra',                  observaciones: 'Factura C-0455', fecha_movimiento: '2026-08-17 09:00', id_usuario: 1, usuario_nombre: 'Carlos Álvarez' },
    { id_movimiento: 10, id_item: 104,id_ubicacion_origen: 2,   id_ubicacion_destino: 4, tipo_movimiento: 'Transferencia',    cantidad: 2,  motivo: 'Traslado a piso de venta',observaciones: '', fecha_movimiento: '2026-08-12 15:30', id_usuario: 3, usuario_nombre: 'Miguel Torres' }
  ],

  usuarios: [
    { id_usuario: 1, nombre_completo: 'Carlos Álvarez', usuario: 'admin',   correo: 'carlos.alvarez@mueblescotrina.pe', password: 'admin123',   rol: 'ADMINISTRADOR', estado: 'activo',   ultimo_acceso: '2026-08-29 09:12', created_at: '2026-01-05' },
    { id_usuario: 2, nombre_completo: 'Julia Pérez',    usuario: 'jperez',  correo: 'julia.perez@mueblescotrina.pe',    password: 'usuario123', rol: 'USUARIO',       estado: 'activo',   ultimo_acceso: '2026-08-28 15:40', created_at: '2026-02-10' },
    { id_usuario: 3, nombre_completo: 'Miguel Torres',  usuario: 'mtorres', correo: 'miguel.torres@mueblescotrina.pe',  password: 'usuario123', rol: 'USUARIO',       estado: 'activo',   ultimo_acceso: '2026-08-20 11:05', created_at: '2026-03-01' },
    { id_usuario: 4, nombre_completo: 'Ana Ramos',      usuario: 'aramos',  correo: 'ana.ramos@mueblescotrina.pe',      password: 'usuario123', rol: 'USUARIO',       estado: 'inactivo', ultimo_acceso: '2026-06-15 08:22', created_at: '2026-01-20' }
  ],

  secuenciales: {
    item: 200,
    caracteristica: 100,
    ubicacion: 5,
    existencia: 100,
    movimiento: 11,
    usuario: 5
  }
};

/* =========================================================
   2. CAPA API — punto único para sustituir mock por fetch()
   Ejemplo futuro:
     getItems: () => fetch('/api/inventario/items').then(r => r.json())
   ========================================================= */

const api = {
  _delay: (data) => Promise.resolve(JSON.parse(JSON.stringify(data))),

  getItems:        ()  => api._delay(db.items_inventario),
  getCaracteristicas: () => api._delay(db.caracteristicas),
  getUbicaciones:  ()  => api._delay(db.ubicaciones),
  getExistencias:  ()  => api._delay(db.existencias),
  getMovimientos:  ()  => api._delay(db.movimientos_inventario),

  saveItem(payload) {
    if (payload.id_item) {
      const it = db.items_inventario.find(i => i.id_item === payload.id_item);
      Object.assign(it, payload, { updated_at: todayISO() });
      db.caracteristicas = db.caracteristicas.filter(c => c.id_item !== payload.id_item);
      payload.caracteristicas.forEach(c => db.caracteristicas.push({
        ...c, id_caracteristica: db.secuenciales.caracteristica++, id_item: payload.id_item
      }));
      return api._delay(it);
    }
    const nuevo = { ...payload };
    nuevo.id_item = db.secuenciales.item++;
    nuevo.created_at = todayISO();
    nuevo.updated_at = todayISO();
    delete nuevo.caracteristicas;
    db.items_inventario.push(nuevo);
    payload.caracteristicas.forEach(c => db.caracteristicas.push({
      ...c, id_caracteristica: db.secuenciales.caracteristica++, id_item: nuevo.id_item
    }));
    return api._delay(nuevo);
  },

  saveUbicacion(u) {
    if (u.id_ubicacion) {
      Object.assign(db.ubicaciones.find(x => x.id_ubicacion === u.id_ubicacion), u);
      return api._delay(u);
    }
    u.id_ubicacion = db.secuenciales.ubicacion++;
    u.created_at = todayISO();
    db.ubicaciones.push(u);
    return api._delay(u);
  },

  toggleUbicacion(id) {
    const u = db.ubicaciones.find(x => x.id_ubicacion === id);
    u.estado = u.estado === 'activo' ? 'inactivo' : 'activo';
    return api._delay(u);
  },

  saveMovimiento(m) {
    m.id_movimiento = db.secuenciales.movimiento++;
    m.fecha_movimiento = nowISO();
    m.id_usuario = state.session ? state.session.id_usuario : null;
    m.usuario_nombre = state.session ? state.session.nombre_completo : 'Sistema';
    db.movimientos_inventario.unshift(m);

    const aplicar = (idItem, idUbi, delta) => {
      let ex = db.existencias.find(e => e.id_item === idItem && e.id_ubicacion === idUbi);
      if (!ex) {
        ex = { id_existencia: db.secuenciales.existencia++, id_item: idItem, id_ubicacion: idUbi, cantidad: 0, created_at: todayISO(), updated_at: nowISO() };
        db.existencias.push(ex);
      }
      ex.cantidad += delta;
      if (ex.cantidad < 0) ex.cantidad = 0;
      ex.updated_at = nowISO();
    };

    switch (m.tipo_movimiento) {
      case 'Entrada':          aplicar(m.id_item, m.id_ubicacion_destino, +m.cantidad); break;
      case 'Salida': case 'Consumo':
                               aplicar(m.id_item, m.id_ubicacion_origen, -m.cantidad); break;
      case 'Transferencia':    aplicar(m.id_item, m.id_ubicacion_origen, -m.cantidad);
                               aplicar(m.id_item, m.id_ubicacion_destino, +m.cantidad); break;
      case 'Ajuste positivo':  aplicar(m.id_item, m.id_ubicacion_destino, +m.cantidad); break;
      case 'Ajuste negativo':  aplicar(m.id_item, m.id_ubicacion_origen, -m.cantidad); break;
      case 'Producción':       aplicar(m.id_item, m.id_ubicacion_destino, +m.cantidad); break;
    }
    return api._delay(m);
  },

  aplicarAjustes(ajustes) { // [{id_item, id_ubicacion, diferencia}]
    ajustes.forEach(a => {
      const tipo = a.diferencia > 0 ? 'Ajuste positivo' : 'Ajuste negativo';
      api.saveMovimiento({
        id_item: a.id_item,
        id_ubicacion_origen: a.diferencia > 0 ? null : a.id_ubicacion,
        id_ubicacion_destino: a.diferencia > 0 ? a.id_ubicacion : null,
        tipo_movimiento: tipo,
        cantidad: Math.abs(a.diferencia),
        motivo: 'Inventario físico',
        observaciones: 'Generado desde conteo físico'
      });
    });
    return Promise.resolve(true);
  },

  /* ---- Autenticación y usuarios ----
     NOTA: comparación de contraseña en texto plano — es un mock de
     frontend sin backend. Al conectar un backend real, esto se
     reemplaza por una llamada a /api/auth/login con hash del lado
     servidor (bcrypt/argon2); nunca se debe comparar así en producción. */
  login(usuario, password) {
    const u = db.usuarios.find(x => x.usuario.toLowerCase() === String(usuario || '').trim().toLowerCase());
    if (!u || u.password !== password) return Promise.reject(new Error('Usuario o contraseña incorrectos.'));
    if (u.estado !== 'activo') return Promise.reject(new Error('Este usuario está inactivo. Contacta a un administrador.'));
    u.ultimo_acceso = nowISO();
    return api._delay(u);
  },

  getUsuarios: () => api._delay(db.usuarios),

  saveUsuario(payload) {
    const dup = db.usuarios.find(x => x.usuario.toLowerCase() === payload.usuario.toLowerCase() && x.id_usuario !== payload.id_usuario);
    if (dup) return Promise.reject(new Error('Ya existe un usuario con ese nombre de usuario.'));

    if (payload.id_usuario) {
      const u = db.usuarios.find(x => x.id_usuario === payload.id_usuario);
      const { password, ...resto } = payload;
      Object.assign(u, resto);
      if (password) u.password = password; // se deja vacío en el modal para no cambiarla
      return api._delay(u);
    }
    const nuevo = { ...payload };
    nuevo.id_usuario = db.secuenciales.usuario++;
    nuevo.estado = nuevo.estado || 'activo';
    nuevo.ultimo_acceso = null;
    nuevo.created_at = todayISO();
    db.usuarios.push(nuevo);
    return api._delay(nuevo);
  },

  toggleUsuario(id) {
    const u = db.usuarios.find(x => x.id_usuario === id);
    u.estado = u.estado === 'activo' ? 'inactivo' : 'activo';
    return api._delay(u);
  },

  cambiarPassword(id, actual, nueva) {
    const u = db.usuarios.find(x => x.id_usuario === id);
    if (!u) return Promise.reject(new Error('Usuario no encontrado.'));
    if (u.password !== actual) return Promise.reject(new Error('La contraseña actual no es correcta.'));
    u.password = nueva;
    return api._delay(u);
  }
};

/* =========================================================
   3. ESTADO Y HELPERS
   ========================================================= */

const state = {
  session: null,
  modulo: 'dashboard',
  tabInv: 'resumen',
  filtrosMP:   { q: '', categoria: '', estado: '', stockBajo: false, sort: 'codigo', dir: 'asc' },
  filtrosPT:   { q: '', categoria: '', estado: '', sort: 'codigo', dir: 'asc' },
  filtrosEx:   { q: '', tipo: '', ubicacion: '', disponibilidad: '' },
  filtrosMov:  { q: '', tipo: '' },
  filtrosUsr:  { q: '', rol: '', estado: '' },
  conteoFisico: {} // id_item -> cantidad física capturada
};

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const money = n => '$' + Number(n || 0).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const num = n => Number(n || 0).toLocaleString('es-MX');
const todayISO = () => new Date().toISOString().slice(0, 10);
const nowISO = () => new Date().toISOString().slice(0, 16).replace('T', ' ');
const icon = name => `<svg><use href="#i-${name}"/></svg>`;
const equalCols = n => '<colgroup>' + Array(n).fill(`<col style="width:${(100 / n).toFixed(2)}%">`).join('') + '</colgroup>';

const TIPOS_MOVIMIENTO = ['Entrada', 'Salida', 'Transferencia', 'Ajuste positivo', 'Ajuste negativo', 'Consumo', 'Producción'];
const MOTIVOS = ['Compra', 'Producción', 'Venta', 'Devolución', 'Reabastecimiento taller', 'Traslado a piso de venta', 'Inventario físico', 'Merma / desperdicio', 'Otro'];

function getItem(id)      { return db.items_inventario.find(i => i.id_item === Number(id)); }
function getUbicacion(id){ return db.ubicaciones.find(u => u.id_ubicacion === Number(id)); }

/** Stock total de un ítem (suma de existencias — nunca se guarda en items) */
function stockTotal(idItem) {
  return db.existencias.filter(e => e.id_item === idItem).reduce((s, e) => s + e.cantidad, 0);
}
function stockEn(idItem, idUbicacion) {
  const e = db.existencias.find(e => e.id_item === idItem && e.id_ubicacion === idUbicacion);
  return e ? e.cantidad : 0;
}
function esStockBajo(item) {
  const min = item.tipo === 'MP' ? item.stock_minimo : item.stock_minimo;
  return min != null && stockTotal(item.id_item) <= min;
}
function valorInventario() {
  return db.items_inventario.reduce((t, i) => {
    const costo = i.tipo === 'MP' ? i.costo_unitario : i.costo_fabricacion;
    return t + (costo || 0) * stockTotal(i.id_item);
  }, 0);
}
function badgeEstado(estado) {
  return estado === 'activo'
    ? '<span class="badge badge-success"><span class="dot dot-ok"></span>Activo</span>'
    : '<span class="badge badge-neutral">Inactivo</span>';
}
function badgeStock(item) {
  const st = stockTotal(item.id_item), min = item.stock_minimo ?? 0;
  if (st <= 0)            return `<span class="badge badge-danger">Sin stock</span>`;
  if (st <= min)          return `<span class="badge badge-warning">Bajo</span>`;
  return '<span class="badge badge-success"><span class="dot dot-ok"></span>OK</span>';
}
function meterHTML(item) {
  return `<strong>${num(stockTotal(item.id_item))}</strong>`;
}

/* ---------- Sesión / autenticación ---------- */
const SESSION_KEY = 'mc_sesion_usuario_id';

function esAdmin() { return state.session?.rol === 'ADMINISTRADOR'; }

function iniciales(nombre) {
  return String(nombre || '').trim().split(/\s+/).filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join('') || '--';
}

function getUsuario(id) { return db.usuarios.find(u => u.id_usuario === Number(id)); }

function cargarSesion() {
  const id = Number(localStorage.getItem(SESSION_KEY));
  if (!id) return null;
  const u = db.usuarios.find(x => x.id_usuario === id && x.estado === 'activo');
  return u || null;
}
function guardarSesion(u) {
  state.session = u;
  localStorage.setItem(SESSION_KEY, String(u.id_usuario));
}
function cerrarSesion() {
  state.session = null;
  localStorage.removeItem(SESSION_KEY);
  mostrarLogin();
}

function mostrarLogin() {
  $('#appShell').classList.add('hidden');
  $('#loginScreen').classList.remove('hidden');
  $('#loginError').classList.add('hidden');
  $('#loginForm').reset();
  $('#loginUsuario').focus();
}
function mostrarApp() {
  $('#loginScreen').classList.add('hidden');
  $('#appShell').classList.remove('hidden');
  renderSesionSidebar();
}
function renderSesionSidebar() {
  const u = state.session;
  if (!u) return;
  $('#sidebarUserAvatar').textContent = iniciales(u.nombre_completo);
  $('#sidebarUserName').textContent = u.nombre_completo;
  $('#sidebarUserRole').textContent = u.rol === 'ADMINISTRADOR' ? 'Administrador' : 'Usuario';
}

/* ---------- Toast ---------- */
function toast(msg, tipo = 'success') {
  const t = document.createElement('div');
  t.className = `toast ${tipo}`;
  t.innerHTML = `${icon(tipo === 'success' ? 'check' : 'alert')}<span>${esc(msg)}</span>`;
  $('#toastContainer').appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

/* ---------- Modal genérico ---------- */
function openModal(html, opts = {}) {
  const box = $('#modalBox');
  box.className = 'modal' + (opts.large ? ' modal-lg' : '');
  box.innerHTML = html;
  $('#modalOverlay').classList.remove('hidden');
  box.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', closeModal));
}
function closeModal() {
  $('#modalOverlay').classList.add('hidden');
  $('#modalBox').innerHTML = '';
  state.conteoFisico = {};
}
$('#modalOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ---------- Confirmación simple ---------- */
let _confirmCb = null;
function confirmModal(titulo, msg, cb) {
  _confirmCb = cb;
  openModal(`
    <div class="modal-head"><h3>${esc(titulo)}</h3>
      <button class="icon-btn" data-close>${icon('x')}</button></div>
    <div class="modal-body"><p style="font-size:.92rem">${esc(msg)}</p></div>
    <div class="modal-foot">
      <button class="btn btn-outline" data-close>Cancelar</button>
      <button class="btn btn-danger" id="btnConfirmOk">Confirmar</button>
    </div>`);
  $('#btnConfirmOk').addEventListener('click', () => { closeModal(); _confirmCb && _confirmCb(); });
}

/* =========================================================
   4. ROUTER DE MÓDULOS (hash)
   ========================================================= */

const MODULOS = {
  dashboard:     { titulo: 'Dashboard',     sub: 'Vista general del negocio', render: renderDashboard },
  inventario:    { titulo: 'Inventario',    sub: 'Control de materias primas y productos terminados', render: renderInventario },
  compras:       { titulo: 'Compras',       sub: 'Proveedores, órdenes de compra y recepción de materiales', render: () => renderPlaceholder('compras') },
  produccion:    { titulo: 'Producción',    sub: 'Órdenes de producción y consumo de materias primas', render: () => renderPlaceholder('produccion') },
  ventas:        { titulo: 'Ventas',        sub: 'Clientes, cotizaciones y ventas de productos terminados', render: () => renderPlaceholder('ventas') },
  pagos:         { titulo: 'Pagos',         sub: 'Pagos, pagos parciales y saldos pendientes', render: () => renderPlaceholder('pagos') },
  usuarios:      { titulo: 'Usuarios',      sub: 'Cuentas de acceso, roles y permisos del sistema', render: renderUsuarios },
  configuracion: { titulo: 'Configuración', sub: 'Categorías, unidades de medida, ubicaciones y parámetros', render: () => renderPlaceholder('configuracion') }
};

function navigate(hash) {
  if (!state.session) { mostrarLogin(); return; }

  const [modulo, sub] = hash.replace('#/', '').split('/') || ['dashboard'];
  state.modulo = MODULOS[modulo] ? modulo : 'dashboard';
  if (modulo === 'inventario' && sub) state.tabInv = sub;

  $$('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.module === state.modulo));
  const m = MODULOS[state.modulo];
  $('#breadcrumb').innerHTML = `
    <span class="crumb-root">Inicio</span>
    <span class="crumb-sep">›</span>
    <span class="crumb-current">${esc(m.titulo)}</span>`;
  $('#sidebar').classList.remove('open');
  m.render();
  window.scrollTo(0, 0);
}

/* =========================================================
   5. DASHBOARD
   ========================================================= */

function renderDashboard() {
  const flujo = [
    ['cart',    'Compras',    'Materias primas'],
    ['boxes',   'Inventario', 'Almacén y control'],
    ['factory', 'Producción', 'Fabricación'],
    ['tag',     'Productos',  'Terminados'],
    ['cash',    'Ventas',     'Comercialización'],
    ['check',   'Pagos',      'Cobranza']
  ];
  $('#content').innerHTML = `
    <div class="page-header">
      <div class="page-title">
        <h1>Dashboard</h1>
        <p>Vista general del negocio</p>
      </div>
      <div class="page-actions">
        <button class="btn btn-outline" data-nav="inventario">${icon('boxes')} Ir a Inventario</button>
      </div>
    </div>

    <div class="panel">
      <div class="panel-head">
        <div><h2>Flujo general del sistema</h2>
        <span class="panel-sub">Ciclo operativo de la empresa</span></div>
      </div>
      <div class="panel-body">
        <div class="flow-diagram">
          ${flujo.map(([ic, t, s], idx) => `
            ${idx > 0 ? '<span class="flow-arrow">→</span>' : ''}
            <div class="flow-step">
              <div class="fs-icon">${icon(ic)}</div>
              <h4>${esc(t)}</h4><p>${esc(s)}</p>
            </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="grid-2">
      <div class="panel">
        <div class="panel-head"><h2>Módulos disponibles</h2></div>
        <div class="panel-body">
          <span class="coming-badge">${icon('alert')} Versión inicial</span>
          <p style="font-size:.9rem;color:var(--text-2)">
            En esta versión los módulos <strong>Inventario</strong> y <strong>Usuarios</strong> están completamente funcionales.
            Los demás módulos tienen navegación preparada para su integración posterior.
          </p>
          <ul class="feature-checklist">
            <li>${icon('check')} Inventario — funcional</li>
            <li>${icon('check')} Usuarios — funcional</li>
            <li>${icon('check')} Dashboard — vista general</li>
            <li style="color:var(--text-3)">○ Compras — próximamente</li>
            <li style="color:var(--text-3)">○ Producción — próximamente</li>
            <li style="color:var(--text-3)">○ Ventas — próximamente</li>
            <li style="color:var(--text-3)">○ Pagos — próximamente</li>
            <li style="color:var(--text-3)">○ Configuración — próximamente</li>
          </ul>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head"><h2>Actividad reciente de inventario</h2>
          <button class="btn btn-sm btn-outline" data-nav="inventario/movimientos">Ver todos</button></div>
        <div class="panel-body" style="padding-top:.5rem">
          <ul class="timeline">
            ${db.movimientos_inventario.slice(0, 6).map(mv => {
              const it = getItem(mv.id_item), color =
                mv.tipo_movimiento.startsWith('Ajuste') ? '#d97706' :
                ['Salida','Consumo'].includes(mv.tipo_movimiento) ? '#dc2626' : '#16a34a';
              return `<li>
                <span class="tl-dot" style="background:${color}"></span>
                <div>
                  <strong>${esc(it ? it.nombre : '—')}</strong>
                  <span class="badge badge-neutral" style="margin-left:.4rem">${esc(mv.tipo_movimiento)}</span>
                  <span style="color:var(--text-2)"> · ${num(mv.cantidad)} ${esc(it?.unidad_medida || '')} · ${esc(mv.motivo)}</span>
                  <time>${esc(mv.fecha_movimiento)}</time>
                </div></li>`;
            }).join('')}
          </ul>
        </div>
      </div>
    </div>`;
}

/* =========================================================
   6. MÓDULOS PLACEHOLDER
   ========================================================= */

const FEATURES_PENDIENTES = {
  compras:       ['Proveedores', 'Órdenes de compra', 'Recepción de materiales', 'Ingreso de materias primas al inventario'],
  produccion:    ['Órdenes de producción', 'Consumo de materias primas', 'Fabricación de productos', 'Ingreso de productos terminados al inventario'],
  ventas:        ['Clientes', 'Ventas', 'Detalle de venta', 'Entrega de productos'],
  pagos:         ['Pagos', 'Pagos parciales', 'Saldos pendientes', 'Historial de pagos'],
  configuracion: ['Categorías', 'Unidades de medida', 'Ubicaciones', 'Parámetros generales']
};

function renderPlaceholder(modulo) {
  const m = MODULOS[modulo];
  $('#content').innerHTML = `
    <div class="page-header">
      <div class="page-title"><h1>${esc(m.titulo)}</h1><p>${esc(m.sub)}</p></div>
    </div>
    <div class="panel">
      <div class="panel-body" style="padding:2.5rem; text-align:center">
        <span class="coming-badge">${icon('alert')} Módulo en preparación</span>
        <h2 style="margin-bottom:.4rem">${esc(m.titulo)}</h2>
        <p style="color:var(--text-2);max-width:520px;margin:0 auto;font-size:.92rem">
          La navegación ya está integrada. Este módulo se habilitará en una versión posterior
          siguiendo el flujo general del sistema.
        </p>
        <ul class="feature-checklist" style="max-width:640px;margin:1.4rem auto 0;text-align:left">
          ${FEATURES_PENDIENTES[modulo].map(f => `<li>${icon('sliders')} ${esc(f)}</li>`).join('')}
        </ul>
      </div>
    </div>`;
}

/* =========================================================
   7. MÓDULO INVENTARIO
   ========================================================= */

function renderInventario() {
  const tabs = [
    ['resumen',             'Resumen',              ''],
    ['materias-primas',     'Materias primas',      db.items_inventario.filter(i => i.tipo === 'MP').length],
    ['productos-terminados','Productos terminados', db.items_inventario.filter(i => i.tipo === 'PT').length],
    ['existencias',         'Existencias',          ''],
    ['movimientos',         'Movimientos',          ''],
    ['ubicaciones',         'Ubicaciones',          '']
  ];

  $('#content').innerHTML = `
    <div class="page-header">
      <div class="page-title">
        <h1>Inventario</h1>
        <p>Control de materias primas y productos terminados</p>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary" id="btnNuevoArticulo">${icon('plus')} Nuevo artículo</button>
        <button class="btn btn-outline" id="btnRegistrarMovimiento">${icon('swap')} Registrar movimiento</button>
        <button class="btn btn-outline" id="btnInventarioFisico">${icon('clipboard')} Inventario físico</button>
      </div>
    </div>

    <div class="tabs">
      ${tabs.map(([id, label, badge]) => `
        <button class="tab ${state.tabInv === id ? 'active' : ''}" data-tab="${id}">
          ${label}${badge !== '' ? ` <span class="tab-badge">${badge}</span>` : ''}
        </button>`).join('')}
    </div>

    <div id="tabContent"></div>`;

  $('#btnNuevoArticulo').addEventListener('click', () => modalItem());
  $('#btnRegistrarMovimiento').addEventListener('click', () => modalMovimiento());
  $('#btnInventarioFisico').addEventListener('click', renderInventarioFisico);
  $$('.tab').forEach(t => t.addEventListener('click', () => {
    state.tabInv = t.dataset.tab;
    renderInventario();
    window.scrollTo(0, 0);
  }));

  renderTabInventario();

  // Actualizar pill de alertas globales
  const bajos = db.items_inventario.filter(esStockBajo);
  $('#alertPillCount').textContent = bajos.length;
  $('#alertPill').classList.toggle('hidden', bajos.length === 0);
}

function renderTabInventario() {
  const c = $('#tabContent');
  switch (state.tabInv) {
    case 'resumen':              renderResumenInv(c); break;
    case 'materias-primas':      renderTablaItems(c, 'MP'); break;
    case 'productos-terminados': renderTablaItems(c, 'PT'); break;
    case 'existencias':          renderExistencias(c); break;
    case 'movimientos':          renderMovimientos(c); break;
    case 'ubicaciones':          renderUbicaciones(c); break;
  }
}

/** Re-renderiza la pestaña preservando el foco y el cursor en campos de filtro */
function rerenderTabPreservandoFoco() {
  const activo = document.activeElement;
  const key = activo?.dataset && (activo.dataset.filtro || activo.dataset.exf || activo.dataset.mvf);
  const pos = activo?.selectionStart;
  renderTabInventario();
  if (!key) return;
  const el = $(`[data-filtro="${key}"],[data-exf="${key}"],[data-mvf="${key}"]`);
  if (el) { el.focus(); try { el.setSelectionRange(pos, pos); } catch (_) {} }
}

/* ---------- 7.1 Resumen (vista ejecutiva de una sola pantalla) ---------- */

/** Categoría de salud de stock de un ítem: normal | bajo | sin_stock | sin_minimo */
function categoriaStock(item) {
  if (item.stock_minimo == null) return 'sin_minimo';
  const st = stockTotal(item.id_item);
  if (st <= 0) return 'sin_stock';
  if (st <= item.stock_minimo) return 'bajo';
  return 'normal';
}

/** Navega a otra pestaña de Inventario aplicando filtros opcionales antes de renderizar */
function irAPestana(tab, filtros = {}) {
  if (filtros.filtrosMP) Object.assign(state.filtrosMP, filtros.filtrosMP);
  if (filtros.filtrosPT) Object.assign(state.filtrosPT, filtros.filtrosPT);
  if (filtros.filtrosEx) Object.assign(state.filtrosEx, filtros.filtrosEx);
  state.tabInv = tab;
  renderInventario();
}

/** Ajusta la altura de la pantalla de Resumen para que quepa sin scroll en el viewport actual */
function fitResumenScreen() {
  const el = $('#resumenScreen');
  if (!el) return;
  const contentEl = document.querySelector('.content');
  const padBottom = contentEl ? parseFloat(getComputedStyle(contentEl).paddingBottom) || 0 : 0;
  const top = el.getBoundingClientRect().top;
  const alto = window.innerHeight - top - padBottom;
  el.style.height = Math.max(420, alto) + 'px';
}

function renderResumenInv(container) {
  const mp    = db.items_inventario.filter(i => i.tipo === 'MP');
  const pt    = db.items_inventario.filter(i => i.tipo === 'PT');
  const bajos = db.items_inventario.filter(esStockBajo);
  const todos = db.items_inventario;

  /* --- Estado del inventario: 4 categorías --- */
  const conteoEstado = { normal: 0, bajo: 0, sin_stock: 0, sin_minimo: 0 };
  todos.forEach(i => conteoEstado[categoriaStock(i)]++);
  const totalArticulos = todos.length || 1;
  const estadoDefs = [
    { key: 'normal',     label: 'Stock normal',      color: 'var(--success)', goto: null },
    { key: 'bajo',       label: 'Stock bajo',        color: 'var(--warning)', goto: () => irAPestana('materias-primas', { filtrosMP: { stockBajo: true } }) },
    { key: 'sin_stock',  label: 'Sin stock',         color: 'var(--danger)',  goto: () => irAPestana('existencias', { filtrosEx: { disponibilidad: 'sin-stock' } }) },
    { key: 'sin_minimo', label: 'Sin mínimo definido', color: 'var(--text-3)', goto: null }
  ];

  /* --- Distribución por ubicación (valor estimado) --- */
  const ubiData = db.ubicaciones.map(u => {
    const exs = db.existencias.filter(e => e.id_ubicacion === u.id_ubicacion);
    const val = exs.reduce((t, e) => {
      const it = getItem(e.id_item);
      const costo = it ? (it.tipo === 'MP' ? it.costo_unitario : it.costo_fabricacion) : 0;
      return t + (costo || 0) * e.cantidad;
    }, 0);
    return { u, val };
  }).sort((a, b) => b.val - a.val);
  const totalValorUbi = ubiData.reduce((t, x) => t + x.val, 0) || 1;

  /* --- Movimientos del mes en curso --- */
  const ym = todayISO().slice(0, 7);
  const movMes = db.movimientos_inventario.filter(m => m.fecha_movimiento.slice(0, 7) === ym);
  const contarTipo = t => movMes.filter(m => m.tipo_movimiento === t).length;
  const entradas = contarTipo('Entrada'), salidas = contarTipo('Salida'),
        transferencias = contarTipo('Transferencia'), consumo = contarTipo('Consumo');
  const valorConsumido = movMes.filter(m => m.tipo_movimiento === 'Consumo').reduce((t, m) => {
    const it = getItem(m.id_item);
    const costo = it ? (it.tipo === 'MP' ? it.costo_unitario : it.costo_fabricacion) : 0;
    return t + (costo || 0) * m.cantidad;
  }, 0);

  /* --- Tendencia de movimientos, últimos 30 días --- */
  const hoy = new Date(todayISO() + 'T00:00:00');
  const dias30 = Array.from({ length: 30 }, (_, idx) => {
    const d = new Date(hoy); d.setDate(d.getDate() - (29 - idx));
    return d.toISOString().slice(0, 10);
  });
  const conteoPorDia = dias30.map(d => db.movimientos_inventario.filter(m => m.fecha_movimiento.slice(0, 10) === d).length);
  const maxDia = Math.max(1, ...conteoPorDia);

  container.innerHTML = `
    <div class="resumen-screen" id="resumenScreen">

      <div class="stats-grid resumen-kpis">
        <div class="stat-card">
          <div class="stat-icon blue">${icon('boxes')}</div>
          <div><span class="stat-label">Materias primas</span>
            <div class="stat-value">${mp.length}</div>
            <span class="stat-hint">registradas</span></div>
        </div>
        <div class="stat-card">
          <div class="stat-icon cyan">${icon('tag')}</div>
          <div><span class="stat-label">Productos terminados</span>
            <div class="stat-value">${pt.length}</div>
            <span class="stat-hint">disponibles</span></div>
        </div>
        <div class="stat-card stat-card-clickable" data-goto="stock-bajo">
          <div class="stat-icon amber">${icon('alert')}</div>
          <div><span class="stat-label">Stock bajo</span>
            <div class="stat-value">${bajos.length}</div>
            <span class="stat-hint">artículos bajo mínimo</span></div>
        </div>
        <div class="stat-card">
          <div class="stat-icon green">${icon('cash')}</div>
          <div><span class="stat-label">Valor del inventario</span>
            <div class="stat-value">${money(valorInventario())}</div>
            <span class="stat-hint">estimado a costo</span></div>
        </div>
      </div>

      <div class="resumen-row">
        <div class="panel resumen-panel">
          <div class="panel-head">
            <div><h2>Estado del inventario</h2><span class="panel-sub">${totalArticulos} artículos en total</span></div>
          </div>
          <div class="resumen-body">
            <div class="estado-list">
              ${estadoDefs.map(d => {
                const n = conteoEstado[d.key];
                const pct = Math.round((n / totalArticulos) * 100);
                return `<div class="estado-row ${d.goto ? 'is-clickable' : ''}" ${d.goto ? `data-estado="${d.key}"` : ''}>
                  <span class="estado-dot" style="background:${d.color}"></span>
                  <span class="estado-label">${d.label}</span>
                  <span class="estado-track"><span class="estado-fill" style="width:${pct}%;background:${d.color}"></span></span>
                  <span class="estado-count">${n}</span>
                  <span class="estado-pct">${pct}%</span>
                </div>`;
              }).join('')}
            </div>
          </div>
        </div>

        <div class="panel resumen-panel">
          <div class="panel-head">
            <div><h2>Distribución por ubicación</h2><span class="panel-sub">Valor estimado de existencias</span></div>
          </div>
          <div class="resumen-body">
            <div class="ubi-list">
              ${ubiData.map(({ u, val }) => {
                const pct = Math.round((val / totalValorUbi) * 100);
                return `<div class="ubi-row" data-ubi="${u.id_ubicacion}">
                  <div class="ubi-name-wrap">
                    <span class="ubi-name">${icon('pin')} ${esc(u.nombre)}</span>
                    <span class="ubi-track"><span class="ubi-fill" style="width:${pct}%"></span></span>
                  </div>
                  <span class="ubi-pct">${pct}%</span>
                  <span class="ubi-val">${money(val)}</span>
                </div>`;
              }).join('') || '<p class="resumen-empty">Sin ubicaciones registradas.</p>'}
            </div>
          </div>
        </div>
      </div>

      <div class="resumen-row">
        <div class="panel resumen-panel">
          <div class="panel-head">
            <div><h2>Movimientos</h2><span class="panel-sub">Mes en curso · tendencia de 30 días</span></div>
            <button class="btn btn-sm btn-outline" data-goto-tab="movimientos">Ver historial</button>
          </div>
          <div class="resumen-body resumen-body-mov">
            <div class="mov-stats-mini">
              <div class="mov-stat"><div class="n">${entradas}</div><div class="l">Entradas</div></div>
              <div class="mov-stat"><div class="n">${salidas}</div><div class="l">Salidas</div></div>
              <div class="mov-stat"><div class="n">${transferencias}</div><div class="l">Transfer.</div></div>
              <div class="mov-stat"><div class="n">${consumo}</div><div class="l">Consumo prod.</div></div>
            </div>
            <div class="trend-wrap" title="Movimientos por día — últimos 30 días">
              ${conteoPorDia.map(c => `<span class="trend-bar" style="height:${Math.max(6, Math.round((c / maxDia) * 100))}%"></span>`).join('')}
            </div>
          </div>
        </div>

        <div class="panel resumen-panel">
          <div class="panel-head">
            <div><h2>Indicadores operativos</h2><span class="panel-sub">Qué requiere atención hoy</span></div>
          </div>
          <div class="resumen-body">
            <div class="indicadores-list">
              <div class="indicador-row priority ${bajos.length ? 'clickable' : ''}" ${bajos.length ? 'data-goto="stock-bajo"' : ''}>
                <span class="indicador-icon">⚠</span>
                <span><span class="n">${bajos.length}</span> artículo(s) bajo mínimo</span>
              </div>
              <div class="indicador-row">
                <span class="indicador-icon">↓</span>
                <span><span class="n">${salidas}</span> salidas este mes</span>
              </div>
              <div class="indicador-row">
                <span class="indicador-icon">↑</span>
                <span><span class="n">${entradas}</span> entradas este mes</span>
              </div>
              <div class="indicador-row">
                <span class="indicador-icon">↔</span>
                <span><span class="n">${transferencias}</span> transferencias este mes</span>
              </div>
              <div class="indicador-row">
                <span class="indicador-icon">◆</span>
                <span><span class="n">${money(valorConsumido)}</span> valor consumido</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>`;

  const irAStockBajo = () => irAPestana('materias-primas', { filtrosMP: { stockBajo: true } });

  $$('[data-goto="stock-bajo"]', container).forEach(el => el.addEventListener('click', irAStockBajo));
  $$('[data-estado]', container).forEach(el => {
    const def = estadoDefs.find(d => d.key === el.dataset.estado);
    if (def && def.goto) el.addEventListener('click', def.goto);
  });
  $$('[data-ubi]', container).forEach(el => el.addEventListener('click', () =>
    irAPestana('existencias', { filtrosEx: { ubicacion: el.dataset.ubi, q: '', tipo: '', disponibilidad: '' } })));
  $$('[data-goto-tab]', container).forEach(b =>
    b.addEventListener('click', () => { state.tabInv = b.dataset.gotoTab; renderInventario(); }));

  window.scrollTo(0, 0);
  fitResumenScreen();
}

/* ---------- 7.2 Tabla de ítems (MP o PT) ---------- */

function renderTablaItems(container, tipo) {
  const f = tipo === 'MP' ? state.filtrosMP : state.filtrosPT;
  const categorias = [...new Set(db.items_inventario.filter(i => i.tipo === tipo).map(i => i.categoria))].sort();
  const esMP = tipo === 'MP';

  let rows = db.items_inventario.filter(i => i.tipo === tipo);

  if (f.q) {
    const q = f.q.toLowerCase();
    rows = rows.filter(i => i.codigo.toLowerCase().includes(q) || i.nombre.toLowerCase().includes(q) || (i.marca || '').toLowerCase().includes(q));
  }
  if (f.categoria) rows = rows.filter(i => i.categoria === f.categoria);
  if (f.estado)    rows = rows.filter(i => i.estado === f.estado);
  if (esMP && f.stockBajo) rows = rows.filter(esStockBajo);

  rows.sort((a, b) => {
    let va, vb;
    switch (f.sort) {
      case 'nombre': va = a.nombre.toLowerCase(); vb = b.nombre.toLowerCase(); break;
      case 'categoria': va = a.categoria; vb = b.categoria; break;
      case 'stock': va = stockTotal(a.id_item); vb = stockTotal(b.id_item); break;
      case 'costo': va = esMP ? a.costo_unitario : a.precio_venta; vb = esMP ? b.costo_unitario : b.precio_venta; break;
      default: va = a.codigo; vb = b.codigo;
    }
    const r = va < vb ? -1 : va > vb ? 1 : 0;
    return f.dir === 'asc' ? r : -r;
  });

  const thSort = (key, label, cls = '') => `
    <th class="sortable ${cls}" data-sort="${key}">${label}
      <span class="sort-arrow">${f.sort === key ? (f.dir === 'asc' ? '▲' : '▼') : ''}</span></th>`;

  const acciones = (i) => `
    <button class="icon-action" title="Ver" data-acc="ver" data-id="${i.id_item}">${icon('eye')}</button>
    <button class="icon-action" title="Editar" data-acc="editar" data-id="${i.id_item}">${icon('edit')}</button>
    <button class="icon-action" title="Características" data-acc="carac" data-id="${i.id_item}">${icon('sliders')}</button>
    <button class="icon-action" title="Registrar movimiento" data-acc="mov" data-id="${i.id_item}">${icon('swap')}</button>
    <button class="icon-action" title="Historial" data-acc="hist" data-id="${i.id_item}">${icon('history')}</button>`;

  const colgroup = equalCols(esMP ? 10 : 9);

  const thead = esMP ? `
    <tr>
      ${thSort('codigo','Código')}${thSort('nombre','Nombre')}${thSort('categoria','Categoría')}
      <th>Marca</th><th>Unidad</th>${thSort('stock','Stock','num')}<th class="num">Stock mín.</th>
      ${thSort('costo','Costo unitario','num')}<th>Estado</th><th class="actions-col"></th>
    </tr>` : `
    <tr>
      ${thSort('codigo','Código')}${thSort('nombre','Producto')}${thSort('categoria','Categoría')}
      ${thSort('costo','Costo fab.','num')}<th class="num">Precio venta</th>
      ${thSort('stock','Stock','num')}<th class="num">Stock mín.</th><th>Estado</th><th class="actions-col"></th>
    </tr>`;

  const tbody = rows.map(i => `
    <tr data-id="${i.id_item}">
      <td class="cell-mono">${esc(i.codigo)}</td>
      <td><span class="cell-main">${esc(i.nombre)}</span>${i.observaciones ? `<br><span class="cell-sub">${esc(i.observaciones)}</span>` : ''}</td>
      <td><span class="badge badge-primary">${esc(i.categoria)}</span></td>
      ${esMP
        ? `<td>${esc(i.marca || '—')}</td><td>${esc(i.unidad_medida)}</td>`
        : `<td class="num">${money(i.costo_fabricacion)}</td><td class="num"><strong>${money(i.precio_venta)}</strong></td>`}
      <td class="num">${meterHTML(i)} <span class="cell-sub">${esc(i.unidad_medida)}</span></td>
      <td class="num">${num(i.stock_minimo)}</td>
      ${esMP ? `<td class="num">${money(i.costo_unitario)}</td>` : ''}
      <td>${badgeEstado(i.estado)}</td>
      <td class="actions-cell">${acciones(i)}</td>
    </tr>`).join('');

  container.innerHTML = `
    <div class="panel">
      <div class="table-toolbar">
        <div class="search-box">${icon('search')}
          <input type="text" placeholder="Buscar por código, nombre o marca..." value="${esc(f.q)}" data-filtro="q"></div>
        <select class="select" data-filtro="categoria">
          <option value="">Todas las categorías</option>
          ${categorias.map(cat => `<option value="${esc(cat)}" ${f.categoria === cat ? 'selected' : ''}>${esc(cat)}</option>`).join('')}
        </select>
        <select class="select" data-filtro="estado">
          <option value="">Todos los estados</option>
          <option value="activo"   ${f.estado === 'activo' ? 'selected' : ''}>Activos</option>
          <option value="inactivo" ${f.estado === 'inactivo' ? 'selected' : ''}>Inactivos</option>
        </select>
        ${esMP ? `
        <label style="display:inline-flex;align-items:center;gap:.4rem;font-size:.85rem;color:var(--text-2);cursor:pointer">
          <input type="checkbox" data-filtro="stockBajo" ${f.stockBajo ? 'checked' : ''}>
          Solo stock bajo
        </label>` : ''}
        <span class="toolbar-spacer"></span>
        <span class="result-count">${rows.length} artículo(s)</span>
      </div>
      <div class="table-wrap">
        <table class="data-table">${colgroup}
          <thead>${thead}</thead>
          <tbody>${rows.length ? tbody : '<tr class="empty-row"><td colspan="10">No se encontraron artículos con los filtros aplicados</td></tr>'}</tbody>
        </table>
      </div>
    </div>`;

  // Filtros
  $$('[data-filtro]', container).forEach(el => {
    const handler = () => {
      if (el.type === 'checkbox') f.stockBajo = el.checked;
      else f[el.dataset.filtro] = el.value;
      rerenderTabPreservandoFoco();
    };
    el.addEventListener(el.tagName === 'INPUT' && el.type === 'text' ? 'input' : 'change', handler);
  });

  // Ordenamiento
  $$('th.sortable', container).forEach(th => th.addEventListener('click', () => {
    const key = th.dataset.sort;
    if (f.sort === key) f.dir = f.dir === 'asc' ? 'desc' : 'asc';
    else { f.sort = key; f.dir = 'asc'; }
    renderTabInventario();
  }));

  // Acciones de fila
  $$('[data-acc]', container).forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const id = Number(btn.dataset.id), acc = btn.dataset.acc;
    if (acc === 'ver')   modalVerItem(id);
    if (acc === 'editar') modalItem(id);
    if (acc === 'carac') modalCaracteristicas(id);
    if (acc === 'mov')   modalMovimiento(null, id);
    if (acc === 'hist')  modalHistorial(id);
  }));
}

/* ---------- 7.3 Formulario de artículo (alta/edición) ---------- */

function modalItem(idItem = null) {
  const it = idItem ? getItem(idItem) : null;
  const esMP = !it || it.tipo === 'MP';
  const caracs = it
    ? db.caracteristicas.filter(c => c.id_item === it.id_item).map(c => ({ ...c }))
    : [];
  const categorias = [...new Set(db.items_inventario.map(i => i.categoria))].sort();

  openModal(`
    <div class="modal-head">
      <div><h3>${it ? 'Editar artículo' : 'Nuevo artículo'}</h3>
      <p>${it ? `Código ${esc(it.codigo)}` : 'Registre una materia prima o un producto terminado'}</p></div>
      <button class="icon-btn" data-close>${icon('x')}</button>
    </div>
    <div class="modal-body">
      <form id="formItem" novalidate>
        <input type="hidden" name="id_item" value="${it ? it.id_item : ''}">
        <input type="hidden" name="tipo" value="${esMP ? 'MP' : 'PT'}">

        ${!it ? `
        <div class="field" style="margin-bottom:1rem">
          <label>Tipo de artículo <span class="req">*</span></label>
          <select class="select" name="tipo_sel" style="width:100%">
            <option value="MP">Materia prima</option>
            <option value="PT">Producto terminado</option>
          </select>
        </div>` : ''}

        <div class="form-grid">
          <div class="field">
            <label>Código <span class="req">*</span></label>
            <input class="input" name="codigo" value="${it ? esc(it.codigo) : ''}" placeholder="Ej. MP-032" required>
          </div>
          <div class="field">
            <label>Nombre <span class="req">*</span></label>
            <input class="input" name="nombre" value="${it ? esc(it.nombre) : ''}" required>
          </div>
          <div class="field">
            <label>Categoría <span class="req">*</span></label>
            <input class="input" name="categoria" list="catList" value="${it ? esc(it.categoria) : ''}" required>
            <datalist id="catList">${categorias.map(c => `<option value="${esc(c)}">`).join('')}</datalist>
          </div>
          <div class="field">
            <label>Unidad de medida <span class="req">*</span></label>
            <input class="input" name="unidad_medida" value="${it ? esc(it.unidad_medida) : ''}" placeholder="plancha, unidad, metro..." required>
          </div>

          ${esMP ? `
          <div class="field">
            <label>Marca</label>
            <input class="input" name="marca" value="${it ? esc(it.marca || '') : ''}">
          </div>
          <div class="field">
            <label>Stock mínimo <span class="req">*</span></label>
            <input class="input" type="number" step="any" min="0" name="stock_minimo" value="${it ? it.stock_minimo : 0}" required>
          </div>
          <div class="field span-2">
            <label>Costo unitario <span class="req">*</span></label>
            <input class="input" type="number" step="any" min="0" name="costo_unitario" value="${it ? it.costo_unitario : ''}" required>
          </div>` : `
          <div class="field">
            <label>Costo de fabricación <span class="req">*</span></label>
            <input class="input" type="number" step="any" min="0" name="costo_fabricacion" value="${it ? it.costo_fabricacion : ''}" required>
          </div>
          <div class="field">
            <label>Precio de venta <span class="req">*</span></label>
            <input class="input" type="number" step="any" min="0" name="precio_venta" value="${it ? it.precio_venta : ''}" required>
          </div>
          <div class="field span-2">
            <label>Stock mínimo <span class="req">*</span></label>
            <input class="input" type="number" step="any" min="0" name="stock_minimo" value="${it ? it.stock_minimo : 0}" required>
          </div>`}

          <div class="field span-2">
            <label>Observaciones</label>
            <textarea class="input" name="observaciones" rows="2">${it ? esc(it.observaciones || '') : ''}</textarea>
          </div>
          <div class="field">
            <label>Estado</label>
            <select class="select" name="estado" style="width:100%">
              <option value="activo"   ${it && it.estado === 'activo' ? 'selected' : ''}>Activo</option>
              <option value="inactivo" ${it && it.estado === 'inactivo' ? 'selected' : ''}>Inactivo</option>
            </select>
          </div>
        </div>

        <div class="form-section-title">
          Características técnicas
          <button type="button" class="btn btn-sm btn-outline" id="btnAddCarac">${icon('plus')} Agregar característica</button>
        </div>
        <p style="font-size:.78rem;color:var(--text-3);margin-bottom:.6rem">
          Cada artículo puede tener especificaciones distintas (largo, ancho, espesor, color, acabado, etc.).
        </p>
        <div id="caracList"></div>
        <div id="formError" class="form-error-msg hidden"></div>
      </form>
    </div>
    <div class="modal-foot">
      <button class="btn btn-outline" data-close>Cancelar</button>
      <button class="btn btn-primary" id="btnSaveItem">${icon('check')} ${it ? 'Guardar cambios' : 'Registrar artículo'}</button>
    </div>`);

  const renderCaracs = () => {
    const list = $('#caracList');
    list.innerHTML = caracs.map((c, idx) => `
      <div class="carac-row" data-idx="${idx}">
        <input class="input" placeholder="Nombre (ej. Espesor)" value="${esc(c.nombre)}" data-campo="nombre">
        <input class="input" placeholder="Valor" value="${esc(c.valor)}" data-campo="valor">
        <input class="input" placeholder="Unidad" value="${esc(c.unidad)}" data-campo="unidad">
        <button type="button" class="icon-action danger" title="Quitar" data-del-carac>${icon('x')}</button>
      </div>`).join('');
    $$('[data-del-carac]', list).forEach(btn => btn.addEventListener('click', e => {
      caracs.splice(Number(e.currentTarget.closest('.carac-row').dataset.idx), 1);
      renderCaracs();
    }));
    $$('[data-campo]', list).forEach(inp => inp.addEventListener('input', e => {
      caracs[Number(e.currentTarget.closest('.carac-row').dataset.idx)][e.currentTarget.dataset.campo] = e.currentTarget.value;
    }));
  };
  renderCaracs();

  $('#btnAddCarac').addEventListener('click', () => { caracs.push({ nombre: '', valor: '', unidad: '-' }); renderCaracs(); });

  if (!it) {
    $('select[name="tipo_sel"]').addEventListener('change', e => {
      $('input[name="tipo"]').value = e.currentTarget.value;
      modalItem(null); // re-render limpio según tipo
    });
  }

  $('#btnSaveItem').addEventListener('click', () => {
    const form = $('#formItem');
    const err = $('#formError');
    err.classList.add('hidden');

    const fd = new FormData(form);
    const tipoActual = it ? it.tipo : fd.get('tipo_sel');
    const datos = {
      id_item: fd.get('id_item') ? Number(fd.get('id_item')) : null,
      tipo: tipoActual,
      codigo: fd.get('codigo').trim(),
      nombre: fd.get('nombre').trim(),
      categoria: fd.get('categoria').trim(),
      unidad_medida: fd.get('unidad_medida').trim(),
      estado: fd.get('estado'),
      caracteristicas: caracs.filter(c => c.nombre.trim())
    };

    if (!datos.codigo || !datos.nombre || !datos.categoria || !datos.unidad_medida) {
      err.textContent = 'Complete los campos obligatorios (código, nombre, categoría y unidad de medida).';
      err.classList.remove('hidden'); return;
    }
    const dup = db.items_inventario.find(i => i.codigo.toLowerCase() === datos.codigo.toLowerCase() && i.id_item !== datos.id_item);
    if (dup) { err.textContent = `El código "${datos.codigo}" ya existe (${dup.nombre}).`; err.classList.remove('hidden'); return; }

    if (datos.tipo === 'MP') {
      datos.marca = fd.get('marca').trim();
      datos.stock_minimo = Number(fd.get('stock_minimo') || 0);
      datos.costo_unitario = Number(fd.get('costo_unitario') || 0);
      datos.observaciones = fd.get('observaciones').trim();
    } else {
      datos.stock_minimo = Number(fd.get('stock_minimo') || 0);
      datos.costo_fabricacion = Number(fd.get('costo_fabricacion') || 0);
      datos.precio_venta = Number(fd.get('precio_venta') || 0);
      datos.observaciones = fd.get('observaciones').trim();
    }

    api.saveItem(datos).then(() => {
      closeModal();
      toast(it ? 'Artículo actualizado correctamente' : 'Artículo registrado correctamente');
      renderInventario();
    });
  });
}

/* ---------- 7.4 Ver detalle ---------- */

function modalVerItem(idItem) {
  const it = getItem(idItem);
  const caracs = db.caracteristicas.filter(c => c.id_item === it.id_item);
  const exs = db.existencias.filter(e => e.id_item === it.id_item);
  const movs = db.movimientos_inventario.filter(m => m.id_item === it.id_item).slice(0, 5);

  openModal(`
    <div class="modal-head">
      <div><h3>${esc(it.nombre)}</h3>
      <p>${it.tipo === 'MP' ? 'Materia prima' : 'Producto terminado'} · Código ${esc(it.codigo)}</p></div>
      <button class="icon-btn" data-close>${icon('x')}</button>
    </div>
    <div class="modal-body">
      <dl class="detail-grid">
        <dt>Código</dt><dd class="cell-mono">${esc(it.codigo)}</dd>
        <dt>Categoría</dt><dd>${esc(it.categoria)}</dd>
        <dt>Unidad</dt><dd>${esc(it.unidad_medida)}</dd>
        ${it.tipo === 'MP'
          ? `<dt>Marca</dt><dd>${esc(it.marca || '—')}</dd>
             <dt>Costo unitario</dt><dd>${money(it.costo_unitario)}</dd>`
          : `<dt>Costo fabricación</dt><dd>${money(it.costo_fabricacion)}</dd>
             <dt>Precio venta</dt><dd><strong>${money(it.precio_venta)}</strong></dd>`}
        <dt>Stock total</dt><dd>${meterHTML(it)}</dd>
        <dt>Stock mínimo</dt><dd>${num(it.stock_minimo)} ${esc(it.unidad_medida)}</dd>
        <dt>Estado</dt><dd>${badgeEstado(it.estado)}</dd>
        <dt>Observaciones</dt><dd>${esc(it.observaciones || '—')}</dd>
      </dl>

      <div class="form-section-title">Existencias por ubicación</div>
      <table class="mini-table">
        ${equalCols(2)}
        <thead><tr><th>Ubicación</th><th class="num">Cantidad</th></tr></thead>
        <tbody>${exs.length
          ? exs.map(e => `<tr><td>${esc(getUbicacion(e.id_ubicacion)?.nombre || '—')}</td><td class="num">${num(e.cantidad)} ${esc(it.unidad_medida)}</td></tr>`).join('')
          : '<tr><td colspan="2" style="color:var(--text-3);text-align:left">Sin existencias registradas</td></tr>'}
        </tbody>
      </table>

      <div class="form-section-title">Características técnicas</div>
      ${caracs.length ? `<table class="mini-table">
        ${equalCols(3)}
        <thead><tr><th>Nombre</th><th>Valor</th><th>Unidad</th></tr></thead>
        <tbody>${caracs.map(c => `<tr><td>${esc(c.nombre)}</td><td>${esc(c.valor)}</td><td>${esc(c.unidad)}</td></tr>`).join('')}
        </tbody></table>` : '<p style="font-size:.85rem;color:var(--text-3)">Sin características registradas.</p>'}

      <div class="form-section-title">Últimos movimientos</div>
      ${movs.length ? `<ul class="timeline">
        ${movs.map(m => `<li><span class="tl-dot" style="background:${['Salida','Consumo'].includes(m.tipo_movimiento) ? '#dc2626' : m.tipo_movimiento.startsWith('Ajuste') ? '#d97706' : '#16a34a'}"></span>
          <div><strong>${esc(m.tipo_movimiento)}</strong> · ${num(m.cantidad)} ${esc(it.unidad_medida)} — ${esc(m.motivo)}
          <time>${esc(m.fecha_movimiento)}</time></div></li>`).join('')}
      </ul>` : '<p style="font-size:.85rem;color:var(--text-3)">Sin movimientos registrados.</p>'}
    </div>
    <div class="modal-foot">
      <button class="btn btn-outline" id="btnVerEditar">${icon('edit')} Editar</button>
      <button class="btn btn-primary" data-close>Cerrar</button>
    </div>`);
  $('#btnVerEditar').addEventListener('click', () => modalItem(idItem));
}

/* ---------- 7.5 Características rápidas ---------- */

function modalCaracteristicas(idItem) {
  const it = getItem(idItem);
  modalItem(idItem);
  setTimeout(() => { /* el formulario ya incluye la sección de características */ }, 0);
}

/* ---------- 7.6 Historial por artículo ---------- */

function modalHistorial(idItem) {
  const it = getItem(idItem);
  const movs = db.movimientos_inventario.filter(m => m.id_item === idItem)
    .slice().sort((a, b) => b.fecha_movimiento.localeCompare(a.fecha_movimiento));

  openModal(`
    <div class="modal-head">
      <div><h3>Historial de movimientos</h3><p>${esc(it.nombre)} · ${esc(it.codigo)}</p></div>
      <button class="icon-btn" data-close>${icon('x')}</button>
    </div>
    <div class="modal-body">
      ${movs.length ? `<table class="mini-table">
        ${equalCols(5)}
        <thead><tr><th>Fecha</th><th>Tipo</th><th>Origen → Destino</th><th class="num">Cantidad</th><th>Motivo</th></tr></thead>
        <tbody>${movs.map(m => {
          const orig = m.id_ubicacion_origen ? getUbicacion(m.id_ubicacion_origen)?.nombre : '—';
          const dest = m.id_ubicacion_destino ? getUbicacion(m.id_ubicacion_destino)?.nombre : '—';
          return `<tr>
            <td class="cell-mono">${esc(m.fecha_movimiento)}${m.usuario_nombre ? `<br><span class="cell-sub" style="font-family:inherit">${esc(m.usuario_nombre)}</span>` : ''}</td>
            <td><span class="badge badge-neutral">${esc(m.tipo_movimiento)}</span></td>
            <td style="font-size:.8rem">${esc(orig)} → ${esc(dest)}</td>
            <td class="num">${num(m.cantidad)}</td>
            <td>${esc(m.motivo)}</td></tr>`;
        }).join('')}</tbody></table>`
      : '<p style="font-size:.88rem;color:var(--text-3)">Este artículo aún no tiene movimientos registrados.</p>'}
    </div>
    <div class="modal-foot"><button class="btn btn-primary" data-close>Cerrar</button></div>`);
}

/* ---------- 7.7 Existencias ---------- */

function renderExistencias(container) {
  const f = state.filtrosEx;

  let rows = db.existencias.slice();
  const q = f.q.toLowerCase();
  if (q) rows = rows.filter(e => { const it = getItem(e.id_item); return it && (it.nombre.toLowerCase().includes(q) || it.codigo.toLowerCase().includes(q)); });
  if (f.tipo) rows = rows.filter(e => getItem(e.id_item)?.tipo === f.tipo);
  if (f.ubicacion) rows = rows.filter(e => e.id_ubicacion === Number(f.ubicacion));
  if (f.disponibilidad === 'con-stock') rows = rows.filter(e => e.cantidad > 0);
  if (f.disponibilidad === 'sin-stock') rows = rows.filter(e => e.cantidad <= 0);
  if (f.disponibilidad === 'bajo-minimo') rows = rows.filter(e => { const it = getItem(e.id_item); return it && stockTotal(it.id_item) <= (it.stock_minimo ?? 0); });

  rows.sort((a, b) => (getItem(a.id_item)?.nombre || '').localeCompare(getItem(b.id_item)?.nombre || ''));

  container.innerHTML = `
    <div class="panel">
      <div class="table-toolbar">
        <div class="search-box">${icon('search')}
          <input type="text" placeholder="Buscar artículo..." value="${esc(f.q)}" data-exf="q"></div>
        <select class="select" data-exf="tipo">
          <option value="">Todos los tipos</option>
          <option value="MP" ${f.tipo === 'MP' ? 'selected' : ''}>Materia prima</option>
          <option value="PT" ${f.tipo === 'PT' ? 'selected' : ''}>Producto terminado</option>
        </select>
        <select class="select" data-exf="ubicacion">
          <option value="">Todas las ubicaciones</option>
          ${db.ubicaciones.map(u => `<option value="${u.id_ubicacion}" ${f.ubicacion == u.id_ubicacion ? 'selected' : ''}>${esc(u.nombre)}</option>`).join('')}
        </select>
        <select class="select" data-exf="disponibilidad">
          <option value="">Cualquier disponibilidad</option>
          <option value="con-stock"   ${f.disponibilidad === 'con-stock' ? 'selected' : ''}>Con stock</option>
          <option value="sin-stock"   ${f.disponibilidad === 'sin-stock' ? 'selected' : ''}>Sin stock</option>
          <option value="bajo-minimo" ${f.disponibilidad === 'bajo-minimo' ? 'selected' : ''}>Bajo mínimo (global)</option>
        </select>
        <span class="toolbar-spacer"></span>
        <span class="result-count">${rows.length} registro(s)</span>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          ${equalCols(6)}
          <thead><tr><th>Artículo</th><th>Tipo</th><th>Ubicación</th><th class="num">Cantidad</th><th>Unidad</th><th>Estado</th></tr></thead>
          <tbody>
            ${rows.length === 0
              ? '<tr class="empty-row"><td colspan="6">No hay existencias que coincidan con los filtros</td></tr>'
              : rows.map(e => {
                const it = getItem(e.id_item), ub = getUbicacion(e.id_ubicacion);
                if (!it || !ub) return '';
                return `<tr>
                  <td><span class="cell-main">${esc(it.nombre)}</span><br><span class="cell-sub cell-mono">${esc(it.codigo)}</span></td>
                  <td>${it.tipo === 'MP'
                    ? '<span class="badge badge-info">Materia prima</span>'
                    : '<span class="badge badge-primary">Producto</span>'}</td>
                  <td>${icon('pin')} ${esc(ub.nombre)}</td>
                  <td class="num"><strong>${num(e.cantidad)}</strong></td>
                  <td>${esc(it.unidad_medida)}</td>
                  <td>${e.cantidad <= 0
                    ? '<span class="badge badge-danger">Agotado</span>'
                    : (it.stock_minimo != null && stockTotal(it.id_item) <= it.stock_minimo
                        ? '<span class="badge badge-warning">Stock bajo</span>'
                        : '<span class="badge badge-success"><span class="dot dot-ok"></span>Disponible</span>')}</td>
                </tr>`;
              }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;

  $$('[data-exf]', container).forEach(el => el.addEventListener(el.tagName === 'INPUT' ? 'input' : 'change', () => {
    f[el.dataset.exf] = el.value;
    rerenderTabPreservandoFoco();
  }));
}

/* ---------- 7.8 Ubicaciones ---------- */

function renderUbicaciones(container) {
  container.innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <div><h2>Ubicaciones</h2><span class="panel-sub">Almacenes, talleres y puntos de venta donde se controla existencias</span></div>
        <button class="btn btn-primary btn-sm" id="btnNuevaUbicacion">${icon('plus')} Nueva ubicación</button>
      </div>
      <div class="table-wrap">
          <table class="data-table">
            ${equalCols(6)}
            <thead><tr><th>Nombre</th><th>Tipo</th><th>Descripción</th><th class="num">Ítems almacenados</th><th>Estado</th><th class="actions-col"></th></tr></thead>
          <tbody>
            ${db.ubicaciones.map(u => {
              const n = db.existencias.filter(e => e.id_ubicacion === u.id_ubicacion).length;
              return `<tr>
                <td><span class="cell-main">${icon('pin')} ${esc(u.nombre)}</span></td>
                <td><span class="badge badge-info">${esc(u.tipo)}</span></td>
                <td>${esc(u.descripcion || '—')}</td>
                <td class="num">${n}</td>
                <td>${badgeEstado(u.estado)}</td>
                <td class="actions-cell">
                  <button class="icon-action" title="Editar" data-edit-ubi="${u.id_ubicacion}">${icon('edit')}</button>
                  <button class="icon-action danger" title="${u.estado === 'activo' ? 'Desactivar' : 'Activar'}" data-toggle-ubi="${u.id_ubicacion}">${icon('x')}</button>
                </td></tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;

  $('#btnNuevaUbicacion').addEventListener('click', () => modalUbicacion());
  $$('[data-edit-ubi]').forEach(b => b.addEventListener('click', () => modalUbicacion(Number(b.dataset.editUbi))));
  $$('[data-toggle-ubi]').forEach(b => b.addEventListener('click', () => {
    api.toggleUbicacion(Number(b.dataset.toggleUbi)).then(() => {
      toast('Estado de la ubicación actualizado');
      renderTabInventario();
    });
  }));
}

function modalUbicacion(idUbi = null) {
  const u = idUbi ? getUbicacion(idUbi) : null;
  openModal(`
    <div class="modal-head">
      <div><h3>${u ? 'Editar ubicación' : 'Nueva ubicación'}</h3><p>Almacenes, talleres o locales donde se controla stock</p></div>
      <button class="icon-btn" data-close>${icon('x')}</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field"><label>Nombre <span class="req">*</span></label>
          <input class="input" id="ubiNombre" value="${u ? esc(u.nombre) : ''}" placeholder="Ej. Almacén secundario"></div>
        <div class="field"><label>Tipo</label>
          <select class="select" id="ubiTipo" style="width:100%">
            ${['Almacén', 'Taller', 'Local', 'Otro'].map(t => `<option ${u && u.tipo === t ? 'selected' : ''}>${t}</option>`).join('')}
          </select></div>
        <div class="field span-2"><label>Descripción</label>
          <textarea class="input" id="ubiDesc" rows="2">${u ? esc(u.descripcion || '') : ''}</textarea></div>
        <div class="field"><label>Estado</label>
          <select class="select" id="ubiEstado" style="width:100%">
            <option value="activo" ${u && u.estado === 'activo' ? 'selected' : ''}>Activo</option>
            <option value="inactivo" ${u && u.estado === 'inactivo' ? 'selected' : ''}>Inactivo</option>
          </select></div>
      </div>
      <div id="ubiError" class="form-error-msg hidden"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-outline" data-close>Cancelar</button>
      <button class="btn btn-primary" id="btnSaveUbi">${icon('check')} Guardar</button>
    </div>`);

  $('#btnSaveUbi').addEventListener('click', () => {
    const nombre = $('#ubiNombre').value.trim();
    const errBox = $('#ubiError');
    errBox.classList.add('hidden');
    if (!nombre) { errBox.textContent = 'El nombre es obligatorio.'; errBox.classList.remove('hidden'); return; }
    const dup = db.ubicaciones.find(x => x.nombre.toLowerCase() === nombre.toLowerCase() && x.id_ubicacion !== idUbi);
    if (dup) { errBox.textContent = 'Ya existe una ubicación con ese nombre.'; errBox.classList.remove('hidden'); return; }

    api.saveUbicacion({
      id_ubicacion: idUbi, nombre,
      tipo: $('#ubiTipo').value,
      descripcion: $('#ubiDesc').value.trim(),
      estado: $('#ubiEstado').value
    }).then(() => { closeModal(); toast('Ubicación guardada'); renderTabInventario(); });
  });
}

/* ---------- 7.9 Movimientos ---------- */

function renderMovimientos(container) {
  const f = state.filtrosMov;
  let rows = db.movimientos_inventario.slice();
  if (f.q) {
    const q = f.q.toLowerCase();
    rows = rows.filter(m => {
      const it = getItem(m.id_item);
      return (it && (it.nombre.toLowerCase().includes(q) || it.codigo.toLowerCase().includes(q))) ||
             m.motivo.toLowerCase().includes(q);
    });
  }
  if (f.tipo) rows = rows.filter(m => m.tipo_movimiento === f.tipo);
  rows.sort((a, b) => b.fecha_movimiento.localeCompare(a.fecha_movimiento));

  const badgeTipo = t =>
    t === 'Entrada'    ? '<span class="badge badge-success">Entrada</span>' :
    t === 'Salida'     ? '<span class="badge badge-danger">Salida</span>' :
    t === 'Transferencia' ? '<span class="badge badge-info">Transferencia</span>' :
    t.startsWith('Ajuste') ? `<span class="badge badge-warning">${esc(t)}</span>` :
    t === 'Consumo'    ? '<span class="badge badge-neutral">Consumo</span>' :
                         `<span class="badge badge-primary">${esc(t)}</span>`;

  container.innerHTML = `
    <div class="panel">
      <div class="table-toolbar">
        <div class="search-box">${icon('search')}
          <input type="text" placeholder="Buscar artículo o motivo..." value="${esc(f.q)}" data-mvf="q"></div>
        <select class="select" data-mvf="tipo">
          <option value="">Todos los tipos</option>
          ${TIPOS_MOVIMIENTO.map(t => `<option ${f.tipo === t ? 'selected' : ''}>${t}</option>`).join('')}
        </select>
        <span class="toolbar-spacer"></span>
        <button class="btn btn-primary btn-sm" id="btnNuevoMov">${icon('plus')} Registrar movimiento</button>
      </div>
      <div class="table-wrap">
          <table class="data-table">
            ${equalCols(8)}
            <thead><tr><th>Fecha</th><th>Artículo</th><th>Tipo</th><th>Origen</th><th>Destino</th><th class="num">Cantidad</th><th>Motivo</th><th>Observaciones</th></tr></thead>
          <tbody>
            ${rows.length === 0
              ? '<tr class="empty-row"><td colspan="8">No hay movimientos registrados</td></tr>'
              : rows.map(m => {
                const it = getItem(m.id_item);
                const orig = m.id_ubicacion_origen ? getUbicacion(m.id_ubicacion_origen)?.nombre : '—';
                const dest = m.id_ubicacion_destino ? getUbicacion(m.id_ubicacion_destino)?.nombre : '—';
                return `<tr>
                  <td class="cell-mono">${esc(m.fecha_movimiento)}${m.usuario_nombre ? `<br><span class="cell-sub" style="font-family:inherit">${esc(m.usuario_nombre)}</span>` : ''}</td>
                  <td><span class="cell-main">${esc(it?.nombre || '—')}</span><br><span class="cell-sub cell-mono">${esc(it?.codigo || '')}</span></td>
                  <td>${badgeTipo(m.tipo_movimiento)}</td>
                  <td>${esc(orig)}</td><td>${esc(dest)}</td>
                  <td class="num"><strong>${num(m.cantidad)}</strong> ${esc(it?.unidad_medida || '')}</td>
                  <td>${esc(m.motivo)}</td>
                  <td style="max-width:200px"><span class="cell-sub">${esc(m.observaciones || '—')}</span></td>
                </tr>`;
              }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;

  $('#btnNuevoMov').addEventListener('click', () => modalMovimiento());
  $$('[data-mvf]', container).forEach(el => el.addEventListener(el.tagName === 'INPUT' ? 'input' : 'change', () => {
    f[el.dataset.mvf] = el.value;
    rerenderTabPreservandoFoco();
  }));
}

function modalMovimiento(tipoPreseleccionado = null, idItemPreseleccionado = null) {
  const tipos = TIPOS_MOVIMIENTO;
  const tipoIni = tipoPreseleccionado || 'Entrada';
  const activos = db.items_inventario.filter(i => i.estado === 'activo');

  openModal(`
    <div class="modal-head">
      <div><h3>Registrar movimiento de inventario</h3><p>Los campos se adaptan según el tipo de movimiento</p></div>
      <button class="icon-btn" data-close>${icon('x')}</button>
    </div>
    <div class="modal-body">
      <label style="display:block;font-size:.8rem;font-weight:600;color:var(--text-2);margin-bottom:.4rem">Tipo de movimiento <span class="req">*</span></label>
      <div class="mov-types">
        ${tipos.map((t, i) => `
          <div class="mov-type">
            <input type="radio" name="movTipo" id="mt-${i}" value="${t}" ${t === tipoIni ? 'checked' : ''}>
            <label for="mt-${i}">${t}</label>
          </div>`).join('')}
      </div>

      <div class="form-grid" style="margin-top:1rem">
        <div class="field span-2">
          <label>Artículo <span class="req">*</span></label>
          <select class="select" id="movItem" style="width:100%">
            <option value="">Seleccione un artículo...</option>
            ${activos.map(i => `<option value="${i.id_item}" ${idItemPreseleccionado === i.id_item ? 'selected' : ''}>
              [${esc(i.codigo)}] ${esc(i.nombre)} (${i.tipo === 'MP' ? 'Materia prima' : 'Producto'}) — stock: ${num(stockTotal(i.id_item))} ${esc(i.unidad_medida)}
            </option>`).join('')}
          </select>
        </div>

        <div class="field" id="fldOrigen">
          <label>Ubicación origen</label>
          <select class="select" id="movOrigen" style="width:100%">
            <option value="">Seleccione...</option>
            ${db.ubicaciones.filter(u => u.estado === 'activo').map(u => `<option value="${u.id_ubicacion}">${esc(u.nombre)}</option>`).join('')}
          </select>
        </div>
        <div class="field" id="fldDestino">
          <label>Ubicación destino</label>
          <select class="select" id="movDestino" style="width:100%">
            <option value="">Seleccione...</option>
            ${db.ubicaciones.filter(u => u.estado === 'activo').map(u => `<option value="${u.id_ubicacion}">${esc(u.nombre)}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label>Cantidad <span class="req">*</span></label>
          <input class="input" type="number" step="any" min="0.01" id="movCantidad">
        </div>
        <div class="field">
          <label>Motivo <span class="req">*</span></label>
          <select class="select" id="movMotivo" style="width:100%">
            ${MOTIVOS.map(m => `<option>${m}</option>`).join('')}
          </select>
        </div>
        <div class="field span-2">
          <label>Observaciones</label>
          <textarea class="input" id="movObs" rows="2"></textarea>
        </div>
      </div>
      <div id="movHint" class="form-error-msg hidden"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-outline" data-close>Cancelar</button>
      <button class="btn btn-primary" id="btnSaveMov">${icon('check')} Registrar movimiento</button>
    </div>`);

  const fldOrigen = $('#fldOrigen'), fldDestino = $('#fldDestino');
  const updateFields = () => {
    const t = $('input[name="movTipo"]:checked').value;
    fldOrigen.classList.toggle('hidden', !['Salida', 'Transferencia', 'Ajuste negativo', 'Consumo'].includes(t));
    fldDestino.classList.toggle('hidden', !['Entrada', 'Transferencia', 'Ajuste positivo', 'Producción'].includes(t));
    const lblOrigen = fldOrigen.querySelector('label');
    lblOrigen.innerHTML = `Ubicación origen ${['Salida', 'Transferencia', 'Ajuste negativo', 'Consumo'].includes(t) ? '<span class="req">*</span>' : ''}`;
  };
  $$('input[name="movTipo"]').forEach(r => r.addEventListener('change', updateFields));
  updateFields();

  $('#btnSaveMov').addEventListener('click', () => {
    const hint = $('#movHint');
    hint.classList.add('hidden');
    const showErr = msg => { hint.textContent = msg; hint.classList.remove('hidden'); };

    const tipo = $('input[name="movTipo"]:checked').value;
    const idItem = Number($('#movItem').value || 0);
    const origen = $('#movOrigen').value ? Number($('#movOrigen').value) : null;
    const destino = $('#movDestino').value ? Number($('#movDestino').value) : null;
    const cantidad = Number($('#movCantidad').value);
    const motivo = $('#movMotivo').value;

    if (!idItem) return showErr('Seleccione un artículo.');
    if (!(cantidad > 0)) return showErr('La cantidad debe ser mayor a cero.');

    const necesitaOrigen = ['Salida', 'Transferencia', 'Ajuste negativo', 'Consumo'].includes(tipo);
    const necesitaDestino = ['Entrada', 'Transferencia', 'Ajuste positivo', 'Producción'].includes(tipo);
    if (necesitaOrigen && !origen) return showErr('Seleccione la ubicación de origen.');
    if (necesitaDestino && !destino) return showErr('Seleccione la ubicación de destino.');
    if (tipo === 'Transferencia' && origen === destino) return showErr('El origen y el destino no pueden ser la misma ubicación.');

    if (necesitaOrigen && stockEn(idItem, origen) < cantidad) {
      const it = getItem(idItem);
      return showErr(`Stock insuficiente en origen: disponible ${num(stockEn(idItem, origen))} ${it.unidad_medida}.`);
    }

    api.saveMovimiento({
      id_item: idItem,
      id_ubicacion_origen: origen,
      id_ubicacion_destino: destino,
      tipo_movimiento: tipo,
      cantidad,
      motivo,
      observaciones: $('#movObs').value.trim()
    }).then(() => {
      closeModal();
      toast('Movimiento registrado correctamente');
      renderInventario();
    });
  });
}

/* ---------- 7.10 Inventario físico ---------- */

function renderInventarioFisico() {
  state.conteoFisico = {};
  openModal(`
    <div class="modal-head">
      <div><h3>Inventario físico</h3><p>Conteo físico por ubicación — genera ajustes automáticos</p></div>
      <button class="icon-btn" data-close>${icon('x')}</button>
    </div>
    <div class="modal-body">
      <div class="field">
        <label>Ubicación a contar <span class="req">*</span></label>
        <select class="select" id="conteoUbi" style="width:100%">
          <option value="">Seleccione una ubicación...</option>
          ${db.ubicaciones.filter(u => u.estado === 'activo').map(u => `<option value="${u.id_ubicacion}">${esc(u.nombre)} (${esc(u.tipo)})</option>`).join('')}
        </select>
      </div>
      <div id="conteoResult" style="margin-top:1rem"></div>
    </div>
    <div class="modal-foot" id="conteoFoot">
      <button class="btn btn-outline" data-close>Cancelar</button>
      <button class="btn btn-primary hidden" id="btnAplicarConteo">${icon('check')} Generar ajustes de inventario</button>
    </div>`, { large: true });

  $('#conteoUbi').addEventListener('change', e => {
    const idUbi = Number(e.currentTarget.value || 0);
    renderConteo(idUbi);
  });

  $('#btnAplicarConteo').addEventListener('click', () => {
    const ajustes = Object.entries(state.conteoFisico)
      .map(([idItem, fisica]) => {
        const id = Number(idItem);
        const registrado = stockEn(id, Number($('#conteoUbi').value));
        return { id_item: id, id_ubicacion: Number($('#conteoUbi').value), diferencia: fisica - registrado };
      })
      .filter(a => a.diferencia !== 0);

    if (!ajustes.length) { toast('No hay diferencias que ajustar', 'error'); return; }

    confirmModal(
      'Generar ajustes',
      `Se generarán ${ajustes.length} movimiento(s) de ajuste por las diferencias detectadas. ¿Continuar?`,
      () => api.aplicarAjustes(ajustes).then(() => {
        toast(`${ajustes.length} ajuste(s) aplicados correctamente`);
        closeModal();
        renderInventario();
      })
    );
  });
}

function renderConteo(idUbi) {
  const wrap = $('#conteoResult');
  const btn = $('#btnAplicarConteo');
  if (!idUbi) { wrap.innerHTML = ''; btn.classList.add('hidden'); return; }

  const exs = db.existencias.filter(e => e.id_ubicacion === idUbi);
  if (!exs.length) {
    wrap.innerHTML = '<div class="form-error-msg" style="background:var(--neutral-bg);color:var(--text-2)">Esta ubicación no tiene artículos con existencias registradas.</div>';
    btn.classList.add('hidden');
    return;
  }

  wrap.innerHTML = `
    <table class="data-table">
      ${equalCols(5)}
      <thead><tr>
        <th>Artículo</th><th class="num">Stock registrado</th>
        <th>Cantidad física</th><th class="num">Diferencia</th><th>Observaciones</th>
      </tr></thead>
      <tbody>
        ${exs.map(e => {
          const it = getItem(e.id_item);
          if (!it) return '';
          return `<tr data-item="${e.id_item}">
            <td><span class="cell-main">${esc(it.nombre)}</span><br><span class="cell-sub cell-mono">${esc(it.codigo)}</span></td>
            <td class="num"><strong>${num(e.cantidad)}</strong> ${esc(it.unidad_medida)}</td>
            <td><input class="input" type="number" step="any" min="0" placeholder="${e.cantidad}"
                 data-fisica="${e.id_item}" style="padding:.35rem .55rem"></td>
            <td class="num diff-cell" data-diff="${e.id_item}">—</td>
            <td><input class="input" placeholder="Observaciones..." data-obs="${e.id_item}" style="padding:.35rem .55rem"></td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>`;
  btn.classList.remove('hidden');

  $$('[data-fisica]', wrap).forEach(inp => inp.addEventListener('input', () => {
    const idItem = Number(inp.dataset.fisica);
    const registrado = stockEn(idItem, idUbi);
    const filaDiff = $(`[data-diff="${idItem}"]`, wrap);

    if (inp.value === '') {
      delete state.conteoFisico[idItem];
      filaDiff.textContent = '—';
      filaDiff.className = 'num diff-cell';
      return;
    }
    const fisica = Number(inp.value);
    state.conteoFisico[idItem] = fisica;
    const dif = fisica - registrado;
    filaDiff.textContent = (dif > 0 ? '+' : '') + num(dif);
    filaDiff.className = 'num diff-cell ' + (dif > 0 ? 'count-row-diff-positive' : dif < 0 ? 'count-row-diff-negative' : '');
  }));
}

/* =========================================================
   8. MÓDULO USUARIOS
   ========================================================= */

function renderUsuarios() {
  $('#content').innerHTML = `
    <div class="page-header">
      <div class="page-title">
        <h1>Usuarios</h1>
        <p>${esAdmin() ? 'Cuentas de acceso, roles y permisos del sistema' : 'Tu cuenta y datos de acceso'}</p>
      </div>
      ${esAdmin() ? `<div class="page-actions">
        <button class="btn btn-primary" id="btnNuevoUsuario">${icon('plus')} Nuevo usuario</button>
      </div>` : ''}
    </div>
    <div id="usuariosBody"></div>`;

  if (esAdmin()) {
    $('#btnNuevoUsuario').addEventListener('click', () => modalUsuario());
    renderUsuariosAdmin($('#usuariosBody'));
  } else {
    renderPerfilUsuario($('#usuariosBody'));
  }
}

/** ¿Hay algún otro administrador activo aparte de u? — evita dejar el sistema sin acceso admin */
function hayOtroAdminActivo(u) {
  return db.usuarios.some(x => x.rol === 'ADMINISTRADOR' && x.estado === 'activo' && x.id_usuario !== u.id_usuario);
}
/** Reglas de negocio para desactivar una cuenta desde la tabla */
function puedeDesactivar(u) {
  if (u.id_usuario === state.session.id_usuario) return { ok: false, motivo: 'No puedes desactivar tu propia cuenta.' };
  if (u.rol === 'ADMINISTRADOR' && !hayOtroAdminActivo(u)) return { ok: false, motivo: 'Debe existir al menos un administrador activo en el sistema.' };
  return { ok: true };
}

function renderUsuariosAdmin(container) {
  const f = state.filtrosUsr;
  let rows = db.usuarios.slice();
  const q = f.q.trim().toLowerCase();
  if (q) rows = rows.filter(u => u.nombre_completo.toLowerCase().includes(q) || u.usuario.toLowerCase().includes(q) || (u.correo || '').toLowerCase().includes(q));
  if (f.rol) rows = rows.filter(u => u.rol === f.rol);
  if (f.estado) rows = rows.filter(u => u.estado === f.estado);
  rows.sort((a, b) => a.nombre_completo.localeCompare(b.nombre_completo, 'es'));

  container.innerHTML = `
    <div class="panel">
      <div class="table-toolbar">
        <div class="search-box">${icon('search')}
          <input type="text" placeholder="Buscar por nombre, usuario o correo..." value="${esc(f.q)}" data-usf="q"></div>
        <select class="select" data-usf="rol">
          <option value="">Todos los roles</option>
          <option value="ADMINISTRADOR" ${f.rol === 'ADMINISTRADOR' ? 'selected' : ''}>Administrador</option>
          <option value="USUARIO" ${f.rol === 'USUARIO' ? 'selected' : ''}>Usuario</option>
        </select>
        <select class="select" data-usf="estado">
          <option value="">Todos los estados</option>
          <option value="activo" ${f.estado === 'activo' ? 'selected' : ''}>Activo</option>
          <option value="inactivo" ${f.estado === 'inactivo' ? 'selected' : ''}>Inactivo</option>
        </select>
        <span class="toolbar-spacer"></span>
        <span class="result-count">${rows.length} usuario(s)</span>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          ${equalCols(6)}
          <thead><tr><th>Usuario</th><th>Correo</th><th>Rol</th><th>Estado</th><th>Último acceso</th><th class="actions-col"></th></tr></thead>
          <tbody>
            ${rows.length === 0
              ? '<tr class="empty-row"><td colspan="6">No se encontraron usuarios con esos filtros</td></tr>'
              : rows.map(u => `<tr>
                  <td><div class="user-cell">
                    <div class="user-cell-avatar">${iniciales(u.nombre_completo)}</div>
                    <div><span class="cell-main">${esc(u.nombre_completo)}</span><br><span class="user-cell-login">@${esc(u.usuario)}</span></div>
                  </div></td>
                  <td>${esc(u.correo || '—')}</td>
                  <td><span class="badge ${u.rol === 'ADMINISTRADOR' ? 'badge-rol-admin' : 'badge-rol-usuario'}">${u.rol === 'ADMINISTRADOR' ? 'Administrador' : 'Usuario'}</span></td>
                  <td>${badgeEstado(u.estado)}</td>
                  <td class="cell-mono">${esc(u.ultimo_acceso || 'Nunca')}</td>
                  <td class="actions-cell">
                    <button class="icon-action" title="Editar" data-edit-usr="${u.id_usuario}">${icon('edit')}</button>
                    <button class="icon-action danger" title="${u.estado === 'activo' ? 'Desactivar' : 'Activar'}" data-toggle-usr="${u.id_usuario}">${icon('x')}</button>
                  </td>
                </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;

  $$('[data-usf]', container).forEach(el => el.addEventListener(el.tagName === 'INPUT' ? 'input' : 'change', () => {
    f[el.dataset.usf] = el.value;
    rerenderUsuariosPreservandoFoco();
  }));
  $$('[data-edit-usr]', container).forEach(b => b.addEventListener('click', () => modalUsuario(Number(b.dataset.editUsr))));
  $$('[data-toggle-usr]', container).forEach(b => b.addEventListener('click', () => {
    const u = getUsuario(Number(b.dataset.toggleUsr));
    if (u.estado === 'activo') {
      const chk = puedeDesactivar(u);
      if (!chk.ok) { toast(chk.motivo, 'error'); return; }
    }
    api.toggleUsuario(u.id_usuario).then(() => { toast('Estado del usuario actualizado'); renderUsuariosAdmin(container); });
  }));
}

/** Re-renderiza la tabla de usuarios preservando el foco/cursor del campo de filtro activo */
function rerenderUsuariosPreservandoFoco() {
  const activo = document.activeElement;
  const key = activo?.dataset && activo.dataset.usf;
  const pos = activo?.selectionStart;
  renderUsuariosAdmin($('#usuariosBody'));
  if (!key) return;
  const el = $(`[data-usf="${key}"]`);
  if (el) { el.focus(); try { el.setSelectionRange(pos, pos); } catch (_) {} }
}

function modalUsuario(idUsuario = null) {
  const u = idUsuario ? getUsuario(idUsuario) : null;
  openModal(`
    <div class="modal-head">
      <div><h3>${u ? 'Editar usuario' : 'Nuevo usuario'}</h3><p>${u ? 'Actualiza los datos de la cuenta' : 'Crea una cuenta de acceso al sistema'}</p></div>
      <button class="icon-btn" data-close>${icon('x')}</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field span-2"><label>Nombre completo <span class="req">*</span></label>
          <input class="input" id="usrNombre" value="${u ? esc(u.nombre_completo) : ''}" placeholder="Ej. María Gómez"></div>
        <div class="field"><label>Usuario (login) <span class="req">*</span></label>
          <input class="input" id="usrLogin" value="${u ? esc(u.usuario) : ''}" placeholder="ej. mgomez"></div>
        <div class="field"><label>Correo</label>
          <input class="input" type="email" id="usrCorreo" value="${u ? esc(u.correo || '') : ''}" placeholder="correo@mueblescotrina.pe"></div>
        <div class="field"><label>Rol <span class="req">*</span></label>
          <select class="select" id="usrRol" style="width:100%">
            <option value="USUARIO" ${!u || u.rol === 'USUARIO' ? 'selected' : ''}>Usuario</option>
            <option value="ADMINISTRADOR" ${u && u.rol === 'ADMINISTRADOR' ? 'selected' : ''}>Administrador</option>
          </select></div>
        <div class="field"><label>Estado</label>
          <select class="select" id="usrEstado" style="width:100%">
            <option value="activo" ${!u || u.estado === 'activo' ? 'selected' : ''}>Activo</option>
            <option value="inactivo" ${u && u.estado === 'inactivo' ? 'selected' : ''}>Inactivo</option>
          </select></div>
        <div class="field span-2"><label>${u ? 'Nueva contraseña' : 'Contraseña'} ${u ? '' : '<span class="req">*</span>'}</label>
          <input class="input" type="password" id="usrPass" placeholder="${u ? 'Dejar en blanco para no cambiarla' : '••••••••'}"></div>
      </div>
      <div id="usrError" class="form-error-msg hidden"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-outline" data-close>Cancelar</button>
      <button class="btn btn-primary" id="btnSaveUsr">${icon('check')} Guardar</button>
    </div>`);

  $('#btnSaveUsr').addEventListener('click', () => {
    const errBox = $('#usrError');
    errBox.classList.add('hidden');
    const nombre_completo = $('#usrNombre').value.trim();
    const usuario = $('#usrLogin').value.trim();
    const correo = $('#usrCorreo').value.trim();
    const rol = $('#usrRol').value;
    const estado = $('#usrEstado').value;
    const password = $('#usrPass').value;

    if (!nombre_completo || !usuario) {
      errBox.textContent = 'Nombre completo y usuario son obligatorios.'; errBox.classList.remove('hidden'); return;
    }
    if (!u && !password) {
      errBox.textContent = 'La contraseña es obligatoria para un usuario nuevo.'; errBox.classList.remove('hidden'); return;
    }
    if (u) {
      const dejaDeSerAdminActivo = u.rol === 'ADMINISTRADOR' && u.estado === 'activo' && (rol !== 'ADMINISTRADOR' || estado === 'inactivo');
      if (dejaDeSerAdminActivo && !hayOtroAdminActivo(u)) {
        errBox.textContent = 'Debe existir al menos un administrador activo en el sistema.'; errBox.classList.remove('hidden'); return;
      }
      if (u.id_usuario === state.session.id_usuario && estado === 'inactivo') {
        errBox.textContent = 'No puedes desactivar tu propia cuenta.'; errBox.classList.remove('hidden'); return;
      }
    }

    api.saveUsuario({ id_usuario: idUsuario, nombre_completo, usuario, correo, rol, estado, password })
      .then(u2 => {
        closeModal();
        toast(u ? 'Usuario actualizado' : 'Usuario creado');
        if (u && u.id_usuario === state.session.id_usuario) { state.session = u2; renderSesionSidebar(); }
        renderUsuariosAdmin($('#usuariosBody'));
      })
      .catch(err => { errBox.textContent = err.message; errBox.classList.remove('hidden'); });
  });
}

/* ---------- Vista de perfil (rol Usuario) ---------- */

function renderPerfilUsuario(container) {
  const u = state.session;
  container.innerHTML = `
    <div class="panel">
      <div class="profile-card">
        <div class="profile-avatar">${iniciales(u.nombre_completo)}</div>
        <div class="profile-name">${esc(u.nombre_completo)}</div>
        <div class="profile-login">@${esc(u.usuario)}</div>

        <dl class="profile-detail-grid">
          <dt>Correo</dt><dd>${esc(u.correo || '—')}</dd>
          <dt>Rol</dt><dd><span class="badge badge-rol-usuario">Usuario</span></dd>
          <dt>Estado</dt><dd>${badgeEstado(u.estado)}</dd>
          <dt>Último acceso</dt><dd>${esc(u.ultimo_acceso || 'Este es tu primer acceso')}</dd>
          <dt>Cuenta creada</dt><dd>${esc(u.created_at || '—')}</dd>
        </dl>

        <div class="profile-actions">
          <button class="btn btn-outline" id="btnCambiarPass">${icon('sliders')} Cambiar contraseña</button>
        </div>
        <p style="font-size:.78rem;color:var(--text-3);margin-top:1rem">
          Para cambios en tu rol o tus datos de cuenta, contacta a un administrador.
        </p>
      </div>
    </div>`;

  $('#btnCambiarPass').addEventListener('click', modalCambiarPassword);
}

function modalCambiarPassword() {
  openModal(`
    <div class="modal-head">
      <div><h3>Cambiar contraseña</h3><p>Actualiza la contraseña de tu cuenta</p></div>
      <button class="icon-btn" data-close>${icon('x')}</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field span-2"><label>Contraseña actual <span class="req">*</span></label>
          <input class="input" type="password" id="passActual" autocomplete="current-password"></div>
        <div class="field span-2"><label>Nueva contraseña <span class="req">*</span></label>
          <input class="input" type="password" id="passNueva" autocomplete="new-password"></div>
        <div class="field span-2"><label>Confirmar nueva contraseña <span class="req">*</span></label>
          <input class="input" type="password" id="passConfirma" autocomplete="new-password"></div>
      </div>
      <div id="passError" class="form-error-msg hidden"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-outline" data-close>Cancelar</button>
      <button class="btn btn-primary" id="btnSavePass">${icon('check')} Actualizar</button>
    </div>`);

  $('#btnSavePass').addEventListener('click', () => {
    const errBox = $('#passError');
    errBox.classList.add('hidden');
    const actual = $('#passActual').value;
    const nueva = $('#passNueva').value;
    const confirma = $('#passConfirma').value;
    if (!actual || !nueva || !confirma) {
      errBox.textContent = 'Completa los tres campos.'; errBox.classList.remove('hidden'); return;
    }
    if (nueva.length < 4) {
      errBox.textContent = 'La nueva contraseña debe tener al menos 4 caracteres.'; errBox.classList.remove('hidden'); return;
    }
    if (nueva !== confirma) {
      errBox.textContent = 'La confirmación no coincide con la nueva contraseña.'; errBox.classList.remove('hidden'); return;
    }

    api.cambiarPassword(state.session.id_usuario, actual, nueva)
      .then(() => { closeModal(); toast('Contraseña actualizada correctamente'); })
      .catch(err => { errBox.textContent = err.message; errBox.classList.remove('hidden'); });
  });
}

/* =========================================================
   9. ARRANQUE
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', () => navigate(window.location.hash));
  $('#btnSidebar').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
  window.addEventListener('resize', () => {
    if (state.modulo === 'inventario' && state.tabInv === 'resumen') fitResumenScreen();
  });
  document.addEventListener('click', e => {
    const nav = e.target.closest('[data-nav]');
    if (nav) { window.location.hash = '#/' + nav.dataset.nav; }
  });

  // ---- Login ----
  $('#loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const usuario = $('#loginUsuario').value.trim();
    const password = $('#loginPassword').value;
    const errBox = $('#loginError');
    const btn = $('#loginSubmit');
    errBox.classList.add('hidden');

    if (!usuario || !password) {
      errBox.textContent = 'Ingresa tu usuario y contraseña.'; errBox.classList.remove('hidden'); return;
    }
    btn.disabled = true; btn.textContent = 'Ingresando...';
    api.login(usuario, password)
      .then(u => {
        guardarSesion(u);
        mostrarApp();
        window.location.hash = '#/dashboard';
        navigate('#/dashboard');
      })
      .catch(err => { errBox.textContent = err.message; errBox.classList.remove('hidden'); })
      .finally(() => { btn.disabled = false; btn.textContent = 'Ingresar'; });
  });
  $$('.login-demo-chip').forEach(chip => chip.addEventListener('click', () => {
    $('#loginUsuario').value = chip.dataset.demoUser;
    $('#loginPassword').value = chip.dataset.demoPass;
    $('#loginError').classList.add('hidden');
  }));
  $('#btnLogout').addEventListener('click', () => { cerrarSesion(); toast('Sesión cerrada'); });

  // ---- Sesión inicial ----
  state.session = cargarSesion();
  if (state.session) {
    mostrarApp();
    if (!window.location.hash) window.location.hash = '#/dashboard';
    navigate(window.location.hash || '#/dashboard');
  } else {
    mostrarLogin();
  }
});
