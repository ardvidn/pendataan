import { Column, Entity, Index } from "typeorm";

@Index("dat_op_stimulus_2004_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajak"], { unique: true })
@Entity("dat_op_stimulus_2004", { schema: "public" })
export class DatOpStimulus_2004 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", { primary: true, name: "thn_pajak", length: 4 })
  thnPajak!: string;

  @Column("bigint", { name: "pbb_terhutang", nullable: true })
  pbbTerhutang!: string | null;

  @Column("bigint", { name: "faktor_pengurang", nullable: true })
  faktorPengurang!: string | null;

  @Column("bigint", { name: "pbb_stimulus", nullable: true })
  pbbStimulus!: string | null;
}
