import { Column, Entity, Index } from "typeorm";

@Index("sig_sertifikat_imb_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noSertifikat", "noUrut"], { unique: true })
@Entity("sig_sertifikat_imb", { schema: "public" })
export class SigSertifikatImb {
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

  @Column("character", { primary: true, name: "no_sertifikat", length: 20 })
  noSertifikat!: string;

  @Column("timestamp without time zone", {
    name: "tgl_sertifikat",
    nullable: true,
  })
  tglSertifikat!: Date | null;

  @Column("character", { name: "jns_hak", nullable: true, length: 1 })
  jnsHak!: string | null;

  @Column("character varying", { name: "no_imb", nullable: true, length: 20 })
  noImb!: string | null;

  @Column("timestamp without time zone", { name: "tgl_imb", nullable: true })
  tglImb!: Date | null;

  @Column("character", { name: "jns_peruntukan", nullable: true, length: 2 })
  jnsPeruntukan!: string | null;
}
