import { Column, Entity, Index } from "typeorm";

@Index("ref_buku_stimulus_2007_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "thnPajak"], { unique: true })
@Entity("ref_buku_stimulus_2007", { schema: "public" })
export class RefBukuStimulus_2007 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "thn_pajak", length: 4 })
  thnPajak!: string;

  @Column("character", { name: "kd_sektor", length: 2 })
  kdSektor!: string;

  @Column("smallint", { name: "bk_satu", nullable: true })
  bkSatu!: number | null;

  @Column("smallint", { name: "bk_dua", nullable: true })
  bkDua!: number | null;

  @Column("smallint", { name: "bk_tiga", nullable: true })
  bkTiga!: number | null;

  @Column("smallint", { name: "bk_empat", nullable: true })
  bkEmpat!: number | null;

  @Column("smallint", { name: "bk_lima", nullable: true })
  bkLima!: number | null;

  @Column("character", { name: "status", length: 1 })
  status!: string;
}
