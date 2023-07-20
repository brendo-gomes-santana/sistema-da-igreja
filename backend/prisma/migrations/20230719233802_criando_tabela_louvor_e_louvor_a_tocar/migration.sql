-- CreateTable
CREATE TABLE "louvoures" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "link" TEXT,
    "tom" TEXT,
    "letra" TEXT,

    CONSTRAINT "louvoures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LouvorATocar" (
    "id" TEXT NOT NULL,
    "id_louvor" TEXT NOT NULL,
    "id_agendamento" TEXT NOT NULL,

    CONSTRAINT "LouvorATocar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LouvorATocar" ADD CONSTRAINT "LouvorATocar_id_agendamento_fkey" FOREIGN KEY ("id_agendamento") REFERENCES "agendamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LouvorATocar" ADD CONSTRAINT "LouvorATocar_id_louvor_fkey" FOREIGN KEY ("id_louvor") REFERENCES "louvoures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
