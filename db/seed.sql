INSERT INTO evaluations (title, questions, duration, competency)
VALUES
  ('Evaluación de Bioseguridad II', 25, '30 min', 'Protocolos sanitarios'),
  ('Simulacro de redes CISCO', 18, '40 min', 'Diagnóstico y configuración'),
  ('Gestión de proyectos sostenibles', 22, '35 min', 'Planificación y seguimiento')
ON CONFLICT DO NOTHING;

INSERT INTO hero_settings (title, subtitle, image_url, cta_label, cta_target)
VALUES (
  'Portal académico del Instituto Tecnológico Productivo de la Región',
  'Transparencia, innovación y servicios académicos en un solo lugar.',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
  'Quiero inscribirme',
  '#inscripciones'
)
ON CONFLICT DO NOTHING;
