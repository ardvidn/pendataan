import { Column, Entity, Index } from "typeorm";

@Index("ref_buku_stimulus_2004_pkey", ["kdDati2", "kdPropinsi", "kdSektor", "thnPajak"], { unique: true })
@Entity("ref_buku_stimulus_2004", { schema: "public" })
export class RefBukuStimulus_2004 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_sektor", length: 2 })
  kdSektor!: string;

  @Column("character", { primary: true, name: "thn_pajak", length: 4 })
  thnPajak!: string;

  @Column("smallint", { name: "bk_satu" })
  bkSatu!: number;

  @Column("smallint", { name: "bk_dua" })
  bkDua!: number;

  @Column("smallint", { name: "bk_tiga" })
  bkTiga!: number;

  @Column("smallint", { name: "bk_empat_lima_tnh_kosong" })
  bkEmpatLimaTnhKosong!: number;

  @Column("smallint", { name: "bk_empat_lima_bkn_tnh_kosong" })
  bkEmpatLimaBknTnhKosong!: number;
}
