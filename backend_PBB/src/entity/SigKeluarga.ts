import { Column, Entity, Index } from "typeorm";

@Index("sig_keluarga_pkey", ["anggotaKe", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdKk", "kdPropinsi", "noUrut"], { unique: true })
@Entity("sig_keluarga", { schema: "public" })
export class SigKeluarga {
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

  @Column("character varying", { primary: true, name: "kd_kk", length: 30 })
  kdKk!: string;

  @Column("smallint", { primary: true, name: "anggota_ke" })
  anggotaKe!: number;

  @Column("character varying", { name: "no_ktp", nullable: true, length: 30 })
  noKtp!: string | null;

  @Column("character varying", {
    name: "nm_anggota",
    nullable: true,
    length: 30,
  })
  nmAnggota!: string | null;

  @Column("character", { name: "jns_kelamin", nullable: true, length: 1 })
  jnsKelamin!: string | null;

  @Column("character", { name: "status_keluarga", nullable: true, length: 1 })
  statusKeluarga!: string | null;

  @Column("timestamp without time zone", { name: "tgl_lahir", nullable: true })
  tglLahir!: Date | null;

  @Column("character varying", {
    name: "kota_lahir",
    nullable: true,
    length: 30,
  })
  kotaLahir!: string | null;

  @Column("character", { name: "status_perkawinan", nullable: true, length: 1 })
  statusPerkawinan!: string | null;

  @Column("character", { name: "agama", nullable: true, length: 1 })
  agama!: string | null;

  @Column("character", { name: "pendidikan", nullable: true, length: 1 })
  pendidikan!: string | null;

  @Column("character", { name: "status_pekerjaan", nullable: true, length: 1 })
  statusPekerjaan!: string | null;

  @Column("character varying", { name: "npwp", nullable: true, length: 50 })
  npwp!: string | null;

  @Column("character varying", { name: "paspor", nullable: true, length: 30 })
  paspor!: string | null;
}
