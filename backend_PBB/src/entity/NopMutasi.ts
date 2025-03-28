import { Column, Entity, Index } from "typeorm";

@Index(
  "d8_1_ak",
  ["indeksMutasi", "kdBlok", "kdBlokMutasi", "kdDati2", "kdDati2Mutasi", "kdJnsOp", "kdJnsOpMutasi", "kdKecamatan", "kdKecamatanMutasi", "kdKelurahan", "kdKelurahanMutasi", "kdPropinsi", "kdPropinsiMutasi", "noUrut", "noUrutMutasi"],
  { unique: true }
)
@Index("nop_mutasi_pkey", ["indeksMutasi", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"], { unique: true })
@Entity("nop_mutasi", { schema: "public" })
export class NopMutasi {
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

  @Column("smallint", { primary: true, name: "indeks_mutasi" })
  indeksMutasi!: number;

  @Column("character", { name: "kd_propinsi_mutasi", length: 2 })
  kdPropinsiMutasi!: string;

  @Column("character", { name: "kd_dati2_mutasi", length: 2 })
  kdDati2Mutasi!: string;

  @Column("character", { name: "kd_kecamatan_mutasi", length: 3 })
  kdKecamatanMutasi!: string;

  @Column("character", { name: "kd_kelurahan_mutasi", length: 3 })
  kdKelurahanMutasi!: string;

  @Column("character", { name: "kd_blok_mutasi", length: 3 })
  kdBlokMutasi!: string;

  @Column("character", { name: "no_urut_mutasi", length: 4 })
  noUrutMutasi!: string;

  @Column("character", { name: "kd_jns_op_mutasi", length: 1 })
  kdJnsOpMutasi!: string;

  @Column("bigint", { name: "luas_bumi_mutasi", nullable: true })
  luasBumiMutasi!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_nop_mutasi",
    default: () => "statement_timestamp()",
  })
  tglRekamNopMutasi!: Date;

  @Column("character", { name: "nip_perekam_nop_mutasi", length: 18 })
  nipPerekamNopMutasi!: string;
}
