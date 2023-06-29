-- CreateTable
CREATE TABLE "adms" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "adms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "musicos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "musicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agendamentos" (
    "id" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "horario_para_chegar" TEXT NOT NULL,
    "descricao" TEXT,
    "confirmacao" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "agendamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bandas" (
    "id" TEXT NOT NULL,
    "id_musico" TEXT NOT NULL,
    "id_agendamento" TEXT NOT NULL,

    CONSTRAINT "bandas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bandas" ADD CONSTRAINT "bandas_id_musico_fkey" FOREIGN KEY ("id_musico") REFERENCES "musicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bandas" ADD CONSTRAINT "bandas_id_agendamento_fkey" FOREIGN KEY ("id_agendamento") REFERENCES "agendamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
