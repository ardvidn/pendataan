import { Column, Entity, Index } from "typeorm";

@Index("penyusutan_pkey", ["kdRangePenyusutan", "kondisiBngSusut", "umurEfektif"], { unique: true })
@Entity("penyusutan", { schema: "public" })
export class Penyusutan {
  @Column("smallint", { primary: true, name: "umur_efektif" })
  umurEfektif!: number;

  @Column("character", {
    primary: true,
    name: "kd_range_penyusutan",
    length: 1,
  })
  kdRangePenyusutan!: string;

  @Column("character", { primary: true, name: "kondisi_bng_susut", length: 1 })
  kondisiBngSusut!: string;

  @Column("smallint", { name: "nilai_penyusutan", nullable: true })
  nilaiPenyusutan!: number | null;
}
