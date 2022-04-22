import 'dotenv/config';

import { Client } from 'pg';

const client = new Client({
  user: `${process.env.DB_USERNAME}`,
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_NAME}`,
  password: `${process.env.DB_PASSWORD}`,
  port: Number(`${process.env.DB_PORT}`),
});

const createData = async () => {
  await client.connect();
  await client.query(
    ` 
    INSERT INTO activities (id, name, active, url_active, url_inactive) VALUES 
        ('76e56e1a-c5fb-451b-b49c-0019258383dc', 'Futebol', true, 'https://i.ibb.co/Dr0y0c8/soccer-ative.png', 'https://i.ibb.co/93WkYVq/soccer-inative.png'),
        ('16c2e354-773e-4e99-9c3a-7237f888b2b6', 'Volei', true, 'https://i.ibb.co/6XrkmxH/volei-ative.png', 'https://i.ibb.co/cLx4RRh/volei-inative.png'),
        ('d01d82bb-d056-412a-bb2e-6719dd7c5058', 'Corrida', true, 'https://i.ibb.co/L95SMZL/corrida-ative.png', 'https://i.ibb.co/z7qHWbg/corrida-inative.png'),
        ('31cfa9f0-d462-4274-bfd5-4ffac931d9a8', 'Yoga', true, 'https://i.ibb.co/GV07FTH/ic-ioga-active.png', 'https://i.ibb.co/60rTJ9z/ic-ioga-inative.png'),
        ('f4a8b18e-eb79-4b48-8442-fb322687b409', 'Musica', true, 'https://i.ibb.co/W2NrGkW/music-ative.png', 'https://i.ibb.co/f0gRCyg/music-inative.png'),
        ('0e94a69f-b4c2-47ac-a4fc-6c47eac2d7cc', 'Meditação', true, 'https://i.ibb.co/jWbQmcm/meditacao-ative.png', 'https://i.ibb.co/2cjL5C5/meditacao-inative.png'),
        ('6a249067-8b36-4459-9427-fd6c56160fb5', 'Arte', true, 'https://i.ibb.co/Lh64qGy/arte-ative.png', 'https://i.ibb.co/0MXB3wr/arte-inative.png'),
        ('c3a87d8e-2bf6-4c89-a387-7931c88ae8d7', 'Cinema', true, 'https://i.ibb.co/wyK8j1B/cinema-ative.png', 'https://i.ibb.co/4mMR5tG/cinema-inative.png'),
        ('36482685-538f-4797-bcbd-79f4d4792261', 'Academia', true, 'https://i.ibb.co/hRgH8Cc/gyn-ative.png', 'https://i.ibb.co/N959j0N/gym-inative.png'),
        ('8fe385c9-4893-43e8-b6df-26ee9d4f4df5', 'Jogos', true, 'https://i.ibb.co/KzfYbZd/game-ative.png', 'https://i.ibb.co/x18m2y2/game-inative.png'),
        ('c955a402-9f5b-45e5-9e75-778895185e47', 'Estudos', true, 'https://i.ibb.co/Ntyrx51/study-ative.png', 'https://i.ibb.co/k5PByK7/study-inative.png'),
        ('f7cf2498-5e8b-47a3-9941-eb5cd38fd3e1', 'Tecnologia', true, 'https://i.ibb.co/kK4YxXN/tech-ative.png', 'https://i.ibb.co/4sYdqDK/tech-inative.png');

    INSERT INTO categories (id, name, active) VALUES 
        ('3bd215b6-b2fd-4766-aa28-4e08688edcd0', 'Esportes', true),
        ('5bb76c11-2109-470d-bf0c-8ba07c3a800d', 'Saúde Emocional', true),
        ('1f7fa1e6-5ea8-438c-87f7-3c0e36588d81', 'Atividade ao ar livre', true),
        ('19388b5d-b7db-4a58-b7d2-b9185fb1c6da', 'Palestra', true);

    INSERT INTO disabilities (id, name, description, active) VALUES 
        ('a5be99b0-eb8e-4149-8550-04ee30d16b70', 'Visual', 'A deficiência visual é a perda parcial ou total, adquirida ou congênita, da visão. Existem dois grupos de deficiência:', true),
        ('e3d97014-f59d-4098-8866-2dec0e866a75', 'Auditiva', 'A audição é um dos sentidos mais importantes para a comunicação falada, bem como é um sistema de alerta em diversas situações. Por meio da audição detectamos se há algum perigo iminente.', true),
        ('e5862d84-17a8-4d1b-b216-2e3465aae137', 'Física', 'A deficiência física se caracteriza pelo comprometimento da movimentação e/ou da força de diferentes membros, além da possibilidade de ausência ou má-formação.', true),
        ('7754ef91-6660-40b6-ac1a-aac34b3e0d69', 'Mental/Intelectual', 'Deficiência mental/intelectual é um distúrbio do desenvolvimento neurológico, que aparece precocemente na infância, mais frequentemente antes da idade escolar.', true),
        ('9913e26d-54df-4f99-aa92-703c370890c8', 'Múltipla', 'A Política Nacional de Educação Especial define como associação na mesma pessoa de duas ou mais deficiências primárias (mental/visual/auditivo-física, sensorial, emocional).', true);

    INSERT INTO moods (id, name, active) VALUES ('2fe8d635-9fee-44c2-84d1-0afcdf7303ac', 'Muito Feliz', true),
        ('271589ae-ec5a-47c4-9312-0a0e99f45bad', 'Feliz', true),
        ('d1666152-d691-4df0-9ccf-dfaf07b37107', 'Neutro', true),
        ('ea3fa04f-cda9-480d-90da-354307a1ae05', 'Triste', true),
        ('7f17f539-0691-4b0a-904f-3780c5832e7f', 'Muito Triste', true);

    INSERT INTO activity_categories (id, category_id, activity_id) VALUES 
        ('1fd48bd0-ad9b-42b3-982d-20e3fa4f7a9c', '3bd215b6-b2fd-4766-aa28-4e08688edcd0', '76e56e1a-c5fb-451b-b49c-0019258383dc'),
        ('d572a4c9-712f-4240-aae1-522b5d5222fa', '3bd215b6-b2fd-4766-aa28-4e08688edcd0', '16c2e354-773e-4e99-9c3a-7237f888b2b6'),
        ('5c6a90a6-3809-4096-86b8-33baeba48f51', '3bd215b6-b2fd-4766-aa28-4e08688edcd0', 'd01d82bb-d056-412a-bb2e-6719dd7c5058'),
        ('f14bc26c-fd08-4fb3-b2ec-f4320135b4c6', '1f7fa1e6-5ea8-438c-87f7-3c0e36588d81', 'd01d82bb-d056-412a-bb2e-6719dd7c5058'),
        ('b35fed6d-dd74-4ec7-a028-52874fcbbd16', '1f7fa1e6-5ea8-438c-87f7-3c0e36588d81', 'f4a8b18e-eb79-4b48-8442-fb322687b409'),
        ('3f145e8b-781e-4c3a-8fdd-74c9811bcce5', '5bb76c11-2109-470d-bf0c-8ba07c3a800d', '0e94a69f-b4c2-47ac-a4fc-6c47eac2d7cc');

    INSERT INTO messages_types (id, name, active) VALUES 
        ('f58b8e1b-0548-4d2a-a413-e5715183a68f', 'Alimentação', true),
        ('ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Saúde', true),
        ('8a24cb9e-5756-48fa-9121-df76499a56e1', 'Execícios', true);

    INSERT INTO messages (id, message_type_id, text, active) VALUES 
    ('b34998f9-990a-44cc-b931-0d56544174d2', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Pare de priorizar coisas que acabam com a sua saúde mental.', true),
    ('510ec92f-b8bd-4da8-9727-e4dbc5d5589c', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'A principal característica da saúde mental é a autoaceitação.', true),
    ('b788fc54-a158-49f7-8d1d-0c139bc8376d', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Você não precisa suportar tudo sozinha sempre... Peça ajuda quando não aguentar a carga. Cuide da sua saúde mental!', true),
    ('5d9dadeb-fbcb-4a3c-9fe6-b2dc1255e68c', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Você só vai melhorar sua qualidade de vida quando começar a cuidar da sua saúde mental.', true),
    ('2d1146fb-9ff6-48a4-a828-f4ff67aebddb', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Não tem dinheiro no mundo que possa comprar saúde mental... Cuide-se antes de adoecer!', true),
    ('676a4b37-c592-43bb-843b-ec587f544bf5', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Cuidar da sua saúde mental deve ser prioridade e não luxo.', true),
    ('b3265b32-d9e8-442e-af6f-a2e8ad9a2cd9', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Sua saúde mental é mais importante do que o seu diploma, seu emprego e sua conta bancária. Cuide-se!', true),
    ('98bffcd3-c162-49b1-8017-44dda8d22f9c', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Priorizar a sua saúde mental não é egoísmo, é amor-próprio!', true),
    ('11944469-bbe1-484e-998b-19843c41a986', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'A alegria evita mil males e prolonga a vida.  (William Shakespeare)', true),
    ('383e8d9d-e6fa-4a82-8183-2ea1a4fc498c', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'A felicidade e a saúde são incompatíveis com a ociosidade. (Aristóteles)', true),
    ('cf19f7be-492a-4708-983d-b5b6b0fb9887', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'O primeiro dos bens, depois da saúde, é a paz interior. (François La Rochefoucauld)', true),
    ('1be3efa1-ebec-44b7-886c-6cafce829ca2', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Cuidar da sua saúde e bem-estar também é se amar.', true),
    ('1687489d-1ae6-435e-b809-0f28c0b7488f', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Qualquer amor já é um pouquinho de saúde, um descanso na loucura. (Guimarães Rosa)', true),
    ('55831849-ab8a-405c-9107-3cf3bdcca0bd', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Resolvi ser feliz porque é melhor para a saúde.” (Voltaire)', true),
    ('d740edfb-a8bf-4f4a-a472-7da97b654ff8', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'A saúde e o prazer são para o homem o que o sol e o ar são para as plantas. (Massilon)', true),
    ('f3594ddf-e024-49f8-81ce-8976309b0c4a', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Aquele que não tem tempo para cuidar da saúde vai ter que arrumar tempo para cuidar da doença. (Lair Ribeiro)', true),
    ('42ff09b7-a87c-42d5-803e-d077e2e3bb5e', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Bons amigos são bons para sua saúde. (Irwin Sarason)', true),
    ('dd84b01d-6125-453b-a968-dfb6ad624b30', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Conecte mente e corpo. Pensamento positivo atrai boas vibrações e ajuda na saúde do corpo.', true),
    ('a440b301-7363-41c9-8cf9-fe591b89edc4', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'Curiosidade, entusiasmo e paixão pela vida são aspectos normais da saúde perfeita. (Deepak Chopra)', true),
    ('c13bbb03-a621-478f-9f89-dcbc51b868a6', 'ecf2d6c7-7e91-4a36-bef2-064e73373aec', 'A saúde e a alegria promovem-se uma à outra. (Joseph Addison)', true);

    INSERT INTO wellness_tips (id, title, description, image_url) VALUES ('4bb69b6f-98ce-4987-9c02-079b4fc62653', 'Chá para dormir melhor', 'Iniciando o ritual para uma boa noite.', 'https://i.picsum.photos/id/1000/360/300.jpg?hmac=jNiTq05sReJh4XUHdveLzABQSwtyjuCZqWwHNBQ2kwI'),
        ('ce743f3d-a4f7-4463-ae48-5d480378ca41', 'Planeje suas refeições', 'Comer bem para viver com saúde', 'https://i.picsum.photos/id/600/360/300.jpg?hmac=jfMCXpFhx8Wu7Ormrl2pzeUSZz3nmeFSy2Hcg10mRGo'),
        ('14bfe649-eb02-4036-a1e4-09f0d064d1d6', 'Faça pausas e alongamentos', 'Falta de movimento prejudica sua saúde', 'https://i.picsum.photos/id/585/360/300.jpg?hmac=uk84ujLBSUQiv4SZ0z-VhzTBWj-z4dLOsj6Ff-uMfhg'),
        ('af2719a6-e104-44b6-a1e3-1e85e205c40c', 'Tenha uma vida social ativa', 'Socializar é uma necessidade humana', 'https://i.picsum.photos/id/485/360/300.jpg?hmac=iUldPFRTR6Tyrf3-8cy5YgrMQc9qbvqsNzLJUqgwFBY'),
        ('46ee8075-7dd5-45d5-b674-9ebe40f00985', 'Evite bloqueios mentais', 'Faça pausas para limpar sua mente', 'https://i.picsum.photos/id/805/360/300.jpg?hmac=Irl6Lhvnc8wX7DsFoRHQE3aKUlZS4JyaRzdxaa7_3JM'),
        ('8ab12849-b21c-4874-bba5-93687fcdc0fb', 'Técnicas de respiração', '5 minutos eficientes para acalmar', 'https://i.picsum.photos/id/301/360/300.jpg?hmac=dxy4g_QmUW8DOR1E23O40XBIhULUmVFquwnoOnDyOMY'),
        ('dced21b9-1f6b-4bfa-8807-d8e43ee1189d', 'Faça algo que você gosta', 'Mesmo que tenha pouco tempo livre', 'https://i.picsum.photos/id/1012/360/300.jpg?hmac=iRkILyed49_mSTfKp9VvASI6MwZfEFwXOqOO3_jDgig'),
        ('7c66a3ac-c8a1-4ad9-8ff9-21561275261b', 'Terapia com artes', 'Atividades manuais para relaxar', 'https://i.picsum.photos/id/267/360/300.jpg?hmac=AssPQwYgc8SquwpIVvRv6NyWCS-B4B2NKuPK-0R8j4I'),
        ('d4b498ad-be8e-4e03-b78c-f24bcafb6ad3', 'Playlist para estudar', 'Sons para manter o foco e concentrar', 'https://i.picsum.photos/id/320/360/300.jpg?hmac=jU0bEJ_De04dpfTWI1XOcfMqRKtW3qrXK0lT-4W4bG0');

    INSERT INTO events (
        id, name, description, date, max_participants, start_time, end_time, user_identity, is_online, is_pet_friendly, activity_id, user_id, is_promoted, price) VALUES 
        ('d1a9e7b5-0383-4ed7-a336-9653c8b26f52', 'Volei na Praia', 'Jogar volei na praia do Arrastão', '2022-04-30',  20, '18:30','21:00','1245637', false, false,'16c2e354-773e-4e99-9c3a-7237f888b2b6', '0fb4deeb-7fb5-4ea9-818b-fc25af011ce0', false, 0),
        ('3f282eea-8127-4cd3-80ec-05ee288a6cf2', 'Meditação Tibetana', 'Meditação na praça do Lobato', '2022-08-12',  50, '12:30', null,'987654',  false, false, 'f4a8b18e-eb79-4b48-8442-fb322687b409', '0fb4deeb-7fb5-4ea9-818b-fc25af011ce0', false, 20),
        ('413880b6-6863-469e-9ab8-6455f17417be', 'Show Sabaton', 'Open show Amaranthe, bora galera', '2022-06-20',  20,  '18:30', null,'1245637', false, true,'31cfa9f0-d462-4274-bfd5-4ffac931d9a8', '3dd96c63-5892-46ab-8830-e1231d32c6d6', false, 100),
        ('cc2da024-76e7-4ae6-9e39-169ed9138412', 'Futebol na rua', 'Futebol na rua 3', '2022-05-10',  20, '18:30', null,'1245637', false, true,'76e56e1a-c5fb-451b-b49c-0019258383dc', '3dd96c63-5892-46ab-8830-e1231d32c6d6', false, 0),
        ('377c172d-0dce-4d57-bf6e-808b164749b7', 'Palestra sobre Saude mental', 'Palestra voltada para todos os públicos', '2022-04-30',  40, '18:30', null,'1245637', false, true,'f4a8b18e-eb79-4b48-8442-fb322687b409', '0fb4deeb-7fb5-4ea9-818b-fc25af011ce0', false, null),
        ('5af2d435-c4a4-4ec7-a8e6-85f05384e1cb', 'Terra do amanhã 2022', 'Varios shows de diferentes estilos musicais', '2022-10-25',  1000, '18:30', null, '1245637', false, true, 'f4a8b18e-eb79-4b48-8442-fb322687b409', '14522631-04b7-4de1-9bba-9c35758e8c5e', true, 500);
        
    INSERT INTO addresses (id, street, number, city, state, zip_code, event_id) VALUES 
        ('a7819eeb-9c89-427c-b46b-bc2a584aaf8a', 'Rua das Andorinhas', 123, 'Sao Paulo', 'SP', '666666-666', 'd1a9e7b5-0383-4ed7-a336-9653c8b26f52'),
        ('68484939-cf4b-4a8b-b250-a22e48e93e52', 'Rua Macapa', 123, 'Rio de Janeiro', 'RJ', '999-68866', '3f282eea-8127-4cd3-80ec-05ee288a6cf2'),
        ('a53da905-1ad4-4b52-a4f1-d316717f6dd6', 'Rua Ilhabela', 876, 'Salvador', 'BA', '8888-888', '413880b6-6863-469e-9ab8-6455f17417be'),
        ('1081479a-bcf8-4da8-95f4-d1ab1cb9dc5c', 'Rua Ubatuba', 98, 'Campinas', 'SP', '88888-66886', 'cc2da024-76e7-4ae6-9e39-169ed9138412'),
        ('b6d9280e-3ca1-4b3a-982e-0bb25cd8824e', 'Rua dos Peixes', 456, 'São José dos Campos', 'SP', '666666-666', '377c172d-0dce-4d57-bf6e-808b164749b7'),
        ('ef69c11f-9445-4f6a-905e-e38babbd693c', 'Rua Santa Joaquina', 987, 'Belo Horizonte', 'MG', '666666-666', '5af2d435-c4a4-4ec7-a8e6-85f05384e1cb');
    
    INSERT INTO attendees (id, user_id, event_id, status) VALUES 
        ('8bb38f06-3fad-486e-9748-78b2e2a0e962', '14522631-04b7-4de1-9bba-9c35758e8c5e', 'd1a9e7b5-0383-4ed7-a336-9653c8b26f52', 'SAVED'),
        ('541afbcb-8148-460f-84e6-dda3ddf026a5', '14522631-04b7-4de1-9bba-9c35758e8c5e', '3f282eea-8127-4cd3-80ec-05ee288a6cf2', 'CONFIRMED'),
        ('24949c01-dcd8-410f-9640-bc8c4a338bc1', '14522631-04b7-4de1-9bba-9c35758e8c5e', '413880b6-6863-469e-9ab8-6455f17417be', 'CONFIRMED'),
        ('46e7377c-b597-47cf-908d-9e94cc8b8fee', '14522631-04b7-4de1-9bba-9c35758e8c5e', 'cc2da024-76e7-4ae6-9e39-169ed9138412', 'CONFIRMED'),
        ('db730ac3-2c50-4705-83e6-3f64acf3d868', '3dd96c63-5892-46ab-8830-e1231d32c6d6', 'd1a9e7b5-0383-4ed7-a336-9653c8b26f52', 'CONFIRMED'),
        ('6a5ad9e5-2ca7-436c-bb28-76cf39e2ea73', '3dd96c63-5892-46ab-8830-e1231d32c6d6', '3f282eea-8127-4cd3-80ec-05ee288a6cf2', 'CONFIRMED'),
        ('0254c80d-da5e-4efe-a971-58269c3a9074', '3dd96c63-5892-46ab-8830-e1231d32c6d6', '413880b6-6863-469e-9ab8-6455f17417be', 'CONFIRMED'),
        ('1595b24c-c7d0-4999-ba07-62e6ad38f0bd', '3dd96c63-5892-46ab-8830-e1231d32c6d6', 'cc2da024-76e7-4ae6-9e39-169ed9138412', 'SAVED'),
        ('0c2b6026-8d43-42a5-adf7-198739eee2e6', '3dd96c63-5892-46ab-8830-e1231d32c6d6', '377c172d-0dce-4d57-bf6e-808b164749b7', 'CONFIRMED'),
        ('e4f73a8c-0215-4568-8831-06347a900ef4', '758105a4-6a67-4afb-bb4f-6db73dcb0366', '3f282eea-8127-4cd3-80ec-05ee288a6cf2', 'CONFIRMED'),
        ('7e69ebee-931c-4742-862a-0a739aea8031', '758105a4-6a67-4afb-bb4f-6db73dcb0366', '413880b6-6863-469e-9ab8-6455f17417be', 'CONFIRMED'),
        ('37930d04-c58a-4621-bc61-b45816a823c9', '758105a4-6a67-4afb-bb4f-6db73dcb0366', 'cc2da024-76e7-4ae6-9e39-169ed9138412', 'CONFIRMED'),
        ('0ea01361-510a-40eb-8b9d-ff6578154112', '758105a4-6a67-4afb-bb4f-6db73dcb0366', '377c172d-0dce-4d57-bf6e-808b164749b7', 'CONFIRMED'),
        ('19352e17-ff32-4abe-b4d6-e37f6d2487fb', '638e3a55-faf5-48f2-98fc-89ce04e0b51a', 'd1a9e7b5-0383-4ed7-a336-9653c8b26f52', 'CONFIRMED'),
        ('accdd10b-f4bc-4dac-9dd3-48728b9c760b', '638e3a55-faf5-48f2-98fc-89ce04e0b51a', '3f282eea-8127-4cd3-80ec-05ee288a6cf2', 'CONFIRMED'),
        ('09b16f13-6b56-4d5f-983b-9eee65205ac4', '638e3a55-faf5-48f2-98fc-89ce04e0b51a', '413880b6-6863-469e-9ab8-6455f17417be', 'CONFIRMED'),
        ('c5179e07-f1e7-4df0-81a4-41c7d46db844', '638e3a55-faf5-48f2-98fc-89ce04e0b51a', 'cc2da024-76e7-4ae6-9e39-169ed9138412', 'CONFIRMED'),
        ('b9687736-77f3-47f7-a928-66c6bd2f1d9a', '638e3a55-faf5-48f2-98fc-89ce04e0b51a', '377c172d-0dce-4d57-bf6e-808b164749b7', 'CONFIRMED'),
        ('60ca120c-d702-42d7-9d44-039ccec4ce37', '638e3a55-faf5-48f2-98fc-89ce04e0b51a', '5af2d435-c4a4-4ec7-a8e6-85f05384e1cb', 'CONFIRMED');
    `,
  );
  console.log('All done!');
  await client.end();
};

createData();
