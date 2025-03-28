import { Column, Entity, Index } from "typeorm";

@Index("relation_1763_fk", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBumi", "noUrut"], {})
@Index("jenis_hak_bumi_sin_fk", ["kdJnsHak"], {})
@Index("sertifikat_pkey", ["noSertifikat"], { unique: true })
@Entity("sertifikat", { schema: "public" })
export class Sertifikat {
  @Column("character", { primary: true, name: "no_sertifikat", length: 30 })
  noSertifikat!: string;

  @Column("character", { name: "kd_jns_hak", nullable: true, length: 2 })
  kdJnsHak!: string | null;

  @Column("character", { name: "nama_sertifikat", nullable: true, length: 30 })
  namaSertifikat!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_sertifikat",
    nullable: true,
  })
  tglSertifikat!: Date | null;

  @Column("character", { name: "kd_propinsi", nullable: true, length: 2 })
  kdPropinsi!: string | null;

  @Column("character", { name: "kd_dati2", nullable: true, length: 2 })
  kdDati2!: string | null;

  @Column("character", { name: "kd_kecamatan", nullable: true, length: 3 })
  kdKecamatan!: string | null;

  @Column("character", { name: "kd_kelurahan", nullable: true, length: 3 })
  kdKelurahan!: string | null;

  @Column("character", { name: "kd_blok", nullable: true, length: 3 })
  kdBlok!: string | null;

  @Column("character", { name: "no_urut", nullable: true, length: 4 })
  noUrut!: string | null;

  @Column("character", { name: "kd_jns_op", nullable: true, length: 1 })
  kdJnsOp!: string | null;

  @Column("smallint", { name: "no_bumi", nullable: true })
  noBumi!: number | null;
}
