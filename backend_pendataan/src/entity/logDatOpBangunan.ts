import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("log_dat_op_bangunan")
export class LogDatOpBangunan {
  @PrimaryColumn({ type: "uuid" })
  log_id!: string;

  @Column({ type: "char", length: 255 })
  log_operation!: string;

  @Column({ type: "timestamp" })
  log_stamp!: Date;

  @Column({ type: "char", length: 2 })
  kd_prov!: string;

  @Column({ type: "char", length: 2 })
  kd_kab!: string;

  @Column({ type: "char", length: 3 })
  kd_kec!: string;

  @Column({ type: "char", length: 3 })
  kd_kel!: string;

  @Column({ type: "char", length: 3 })
  kd_blok!: string;

  @Column({ type: "char", length: 4 })
  no_urut!: string;

  @Column({ type: "char", length: 1 })
  kd_jns_op!: string;

  @Column({ type: "int2" })
  no_bng!: number;

  @Column({ type: "char", length: 18 })
  nop!: string;

  @Column({ type: "char", length: 2 })
  kd_jpb!: string;

  @Column({ type: "char", length: 11, nullable: true })
  no_formulir_lspop!: string;

  @Column({ type: "numeric", precision: 4 })
  bng_thn_dibangun!: number;

  @Column({ type: "char", length: 4, nullable: true })
  bng_thn_renovasi!: string;

  @Column({ type: "float8" })
  bng_luas!: number;

  @Column({ type: "int2" })
  bng_jml_lantai!: number;

  @Column({ type: "char", length: 1 })
  bng_kd_kondisi!: string;

  @Column({ type: "char", length: 1 })
  bng_kd_konstruksi!: string;

  @Column({ type: "char", length: 1 })
  bng_kd_atap!: string;

  @Column({ type: "char", length: 1 })
  bng_kd_dinding!: string;

  @Column({ type: "char", length: 1 })
  bng_kd_lantai!: string;

  @Column({ type: "char", length: 1 })
  bng_kd_langit_langit!: string;

  @Column({ type: "float8", nullable: true })
  bng_nilai_sistem!: number;

  @Column({ type: "char", length: 1, nullable: true })
  bng_ins_transaksi!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  bng_keterangan!: string;

  @Column({ type: "char", length: 1, nullable: true })
  jpb2_kls!: string;

  @Column({ type: "int2", nullable: true })
  jpb3_tinggi_kolom!: number;

  @Column({ type: "int2", nullable: true })
  jpb3_lbr_bentang!: number;

  @Column({ type: "int2", nullable: true })
  jpb3_luas_mezzanine!: number;

  @Column({ type: "int2", nullable: true })
  jpb3_keliling_dinding!: number;

  @Column({ type: "int4", nullable: true })
  jpb3_daya_dukung_lantai!: number;

  @Column({ type: "char", length: 1, nullable: true })
  jpb9_kls!: string;

  @Column({ type: "varchar", length: 20 })
  log_by!: string;

  @Column({ type: "timestamp" })
  log_at!: Date;
}
