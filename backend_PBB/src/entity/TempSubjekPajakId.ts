import { Column, Entity } from "typeorm";

@Entity("temp_subjek_pajak_id", { schema: "public" })
export class TempSubjekPajakId {
  @Column("character", { name: "subjek_pajak_id", nullable: true, length: 30 })
  subjekPajakId!: string | null;
}
