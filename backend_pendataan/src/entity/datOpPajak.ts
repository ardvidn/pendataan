import { Entity, Column, PrimaryColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";

@Entity("dat_op_pajak")
export class DatOpPajak {
  @PrimaryColumn({ type: "char", length: 2 })
  kd_prov!: string;

  @PrimaryColumn({ type: "char", length: 2 })
  kd_kab!: string;

  @PrimaryColumn({ type: "char", length: 3 })
  kd_kec!: string;

  @PrimaryColumn({ type: "char", length: 3 })
  kd_kel!: string;

  @PrimaryColumn({ type: "char", length: 3 })
  kd_blok!: string;

  @PrimaryColumn({ type: "char", length: 4 })
  no_urut!: string;

  @PrimaryColumn({ type: "char", length: 1 })
  kd_jns_op!: string;

  @Column({ type: "char", length: 18 })
  nop!: string;

  @Column({ type: "char", length: 24, nullable: true })
  nop_join!: string;

  @Column({ type: "uuid", nullable: true })
  uuid!: string;

  @Column({ type: "varchar", length: 30 })
  no_identitas!: string;

  @Column({ type: "varchar", length: 50 })
  jalan_op!: string;

  @Column({ type: "float" })
  total_luas_bumi!: number;

  @Column({ type: "float", nullable: true })
  total_luas_bng!: number;

  @Column({ type: "varchar", length: 15, nullable: true })
  blok_kav_no_op!: string;

  @Column({ type: "char", length: 3, nullable: true })
  rw_op!: string;

  @Column({ type: "char", length: 3, nullable: true })
  rt_op!: string;

  @Column({ type: "char", length: 20, nullable: true })
  kd_status_wp!: string;

  @Column({ type: "char", length: 2 })
  kd_znt!: string;

  @Column({ type: "char", length: 1 })
  jns_bumi!: string;

  @Column({ type: "char", length: 1 })
  jns_transaksi_op!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  no_sertifikat!: string;

  @Column({ type: "text", nullable: true })
  tgl_sertifikat!: string;

  @Column({ type: "char", length: 18, nullable: true })
  nop_asal!: string;

  @Column({ type: "bool" })
  kd_status_cabang!: boolean;

  @Column({ type: "varchar", length: 40, nullable: true })
  no_persil!: string;

  @Column({ type: "float" })
  longitude!: number;

  @Column({ type: "float" })
  latitude!: number;

  @Column({ type: "geometry", spatialFeatureType: "Point", srid: 4326, nullable: true })
  geom!: string;

  @Column({ type: "varchar", length: 1, nullable: true })
  jns_peruntukan!: string;

  @Column({ type: "varchar", length: 1, nullable: true })
  jns_asaltanah!: string;

  @Column({ type: "timestamp" })
  tgl_pelayanan!: Date;

  @Column({ type: "varchar", length: 20 })
  user_pelayanan!: string;

  @Column({ type: "char", length: 2 })
  kd_jns_pelayanan!: string;

  @Column({ type: "char", length: 1 })
  kd_pelayanan!: string;

  @Column({ type: "text", nullable: true })
  keterangan!: string;

  @Column({ type: "char", length: 18, nullable: true })
  nop_relasi!: string;

  @Column({ type: "int", nullable: true })
  hotel!: number;

  @Column({ type: "int", nullable: true })
  restoran!: number;

  @Column({ type: "int", nullable: true })
  hiburan!: number;

  @Column({ type: "int", nullable: true })
  reklame!: number;

  @Column({ type: "int", nullable: true })
  ppj!: number;

  @Column({ type: "int", nullable: true })
  mblbi!: number;

  @Column({ type: "int", nullable: true })
  parkir!: number;

  @Column({ type: "int", nullable: true })
  pat!: number;

  @Column({ type: "int", nullable: true })
  walet!: number;

  @Column({ type: "text", array: true, nullable: true })
  foto_op!: string[];

  @Column({ type: "varchar", length: 255 })
  log_by!: string;

  @Column({ type: "timestamp" })
  log_at!: Date;

  @Column({ type: "int", nullable: true })
  persen_njkp!: number;

  @Column({ type: "bool" })
  is_pangan_ternak!: boolean;

  @Column({ type: "bool", nullable: true })
  is_verif!: boolean;

  @Column({ type: "varchar", length: 255, nullable: true })
  ket_verif!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  ket_pangan_ternak!: string;

  @Column({ type: "char", length: 2, nullable: true })
  kd_prov_baru!: string;

  @Column({ type: "char", length: 2, nullable: true })
  kd_kab_baru!: string;

  @Column({ type: "char", length: 3, nullable: true })
  kd_kec_baru!: string;

  @Column({ type: "char", length: 3, nullable: true })
  kd_kel_baru!: string;

  @Column({ type: "char", length: 3, nullable: true })
  kd_blok_baru!: string;

  @Column({ type: "char", length: 4, nullable: true })
  no_urut_baru!: string;

  @Column({ type: "char", length: 1, nullable: true })
  kd_jns_op_baru!: string;

  @Column({ type: "char", length: 18, nullable: true })
  nop_baru!: string;

  @Column({ type: "char", length: 100, nullable: true })
  dusun_op!: string;

  @Column({ type: "text", array: true, nullable: true })
  jenis_pajak!: string[];
}
