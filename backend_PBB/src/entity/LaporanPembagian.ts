import { Column, Entity, Index } from "typeorm";

@Index("laporan_pembagian_pkey", ["blnLapPembagian", "kdDati2", "kdPropinsi", "thnLapPembagian"], { unique: true })
@Index("k6_2_ak", ["blnLapPembagian", "kdDati2", "kdPropinsi", "thnLapPembagian"], { unique: true })
@Index("k6_1_ak", ["blnLapPembagian", "jnsMataAnggaran", "kdDati2", "kdMataAnggaran", "kdPropinsi", "thnLapPembagian"], { unique: true })
@Entity("laporan_pembagian", { schema: "public" })
export class LaporanPembagian {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_lap_pembagian", length: 4 })
  thnLapPembagian!: string;

  @Column("character", { primary: true, name: "bln_lap_pembagian", length: 2 })
  blnLapPembagian!: string;

  @Column("character", { name: "kd_mata_anggaran", length: 4 })
  kdMataAnggaran!: string;

  @Column("character", { name: "jns_mata_anggaran", length: 1 })
  jnsMataAnggaran!: string;

  @Column("character", { name: "no_sk_pembagian", length: 30 })
  noSkPembagian!: string;

  @Column("timestamp without time zone", { name: "tgl_sk_pembagian" })
  tglSkPembagian!: Date;

  @Column("character", { name: "no_spmphp", length: 30 })
  noSpmphp!: string;

  @Column("timestamp without time zone", { name: "tgl_spmphp" })
  tglSpmphp!: Date;

  @Column("character varying", {
    name: "kd_program",
    nullable: true,
    length: 15,
  })
  kdProgram!: string | null;

  @Column("character varying", { name: "kd_unit", nullable: true, length: 10 })
  kdUnit!: string | null;

  @Column("character varying", {
    name: "kd_lokasi",
    nullable: true,
    length: 10,
  })
  kdLokasi!: string | null;

  @Column("bigint", { name: "potongan", nullable: true })
  potongan!: string | null;

  @Column("character varying", {
    name: "lokasi_kpkn",
    nullable: true,
    length: 30,
  })
  lokasiKpkn!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_lap_pembagian",
    default: () => "statement_timestamp()",
  })
  tglRekamLapPembagian!: Date;

  @Column("character", { name: "nip_rekam_lap_pembagian", length: 18 })
  nipRekamLapPembagian!: string;

  @Column("character varying", {
    name: "kd_proyek",
    nullable: true,
    length: 15,
  })
  kdProyek!: string | null;
}
