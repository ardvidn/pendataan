import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { DatOpPajak } from "./datOpPajak";

@Entity("wajib_pajak")
export class WajibPajak {
  @Column({ type: "char", length: 1 })
  jns_wp!: string;

  @PrimaryColumn({ type: "varchar", length: 30 })
  no_identitas!: string;

  @Column({ type: "varchar", length: 50 })
  jns_identitas!: string;

  @Column({ type: "varchar", length: 100 })
  nm_wp!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  jns_kelamin_wp!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  tempat_lahir_wp!: string;

  @Column({ type: "text", nullable: true })
  tanggal_lahir_wp!: string;

  @Column({ type: "text" })
  alamat_wp!: string;

  @Column({ type: "varchar", length: 15, nullable: true })
  blok_wp!: string;

  @Column({ type: "varchar", length: 3, nullable: true })
  rt_wp!: string;

  @Column({ type: "varchar", length: 3, nullable: true })
  rw_wp!: string;

  @Column({ type: "char", length: 2 })
  kd_provinsi!: string;

  @Column({ type: "char", length: 2 })
  kd_kabupaten!: string;

  @Column({ type: "char", length: 3 })
  kd_kecamatan!: string;

  @Column({ type: "char", length: 3 })
  kd_kelurahan!: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  telp_wp!: string;

  @Column({ type: "varchar", length: 10, nullable: true })
  kodepos_wp!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  email_wp!: string;

  @Column({ type: "int2", nullable: true })
  pekerjaan_wp!: number;

  @Column({ type: "char", length: 16, nullable: true })
  npwp!: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  nm_penanggung_jawab!: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  posisi_penanggung_jawab!: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  foto_wp!: string;

  @Column({ type: "varchar", length: 20 })
  log_by!: string;

  @Column({ type: "timestamp" })
  log_at!: Date;

  @Column({ type: "varchar", length: 100, nullable: true })
  dusun_wp!: string;

  @Column({ type: "varchar", length: 18, nullable: true })
  nop!: string;

  @Column({ type: "varchar", length: 30, nullable: true })
  no_identitas_lama!: string;
}
