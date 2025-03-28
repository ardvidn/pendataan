import { Column, Entity, Index } from "typeorm";

@Index("penduduk_kawin_fk", ["kdStatKawin"], {})
@Index("stat_kel_person_fk", ["kdStatus"], {})
@Index("penduduk_nama", ["nama", "noPenduduk"], {})
@Index("penduduk_pkey", ["noPenduduk"], { unique: true })
@Entity("penduduk", { schema: "public" })
export class Penduduk {
  @Column("character", { primary: true, name: "no_penduduk", length: 30 })
  noPenduduk!: string;

  @Column("character varying", { name: "no_kk", nullable: true, length: 30 })
  noKk!: string | null;

  @Column("character", { name: "kd_stat_kawin", nullable: true, length: 1 })
  kdStatKawin!: string | null;

  @Column("character", { name: "kd_status", nullable: true, length: 2 })
  kdStatus!: string | null;

  @Column("character varying", { name: "nama", nullable: true, length: 30 })
  nama!: string | null;

  @Column("timestamp without time zone", { name: "tgl_lahir", nullable: true })
  tglLahir!: Date | null;

  @Column("character varying", {
    name: "kota_lahir",
    nullable: true,
    length: 30,
  })
  kotaLahir!: string | null;

  @Column("character", { name: "jns_kelamin", nullable: true, length: 1 })
  jnsKelamin!: string | null;
}
