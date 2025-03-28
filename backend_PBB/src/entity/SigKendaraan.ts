import { Column, Entity, Index } from "typeorm";

@Index("sig_kendaraan_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noPolisi", "noUrut"], { unique: true })
@Entity("sig_kendaraan", { schema: "public" })
export class SigKendaraan {
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

  @Column("character varying", { primary: true, name: "no_polisi", length: 10 })
  noPolisi!: string;

  @Column("character varying", {
    name: "nm_pemilik",
    nullable: true,
    length: 30,
  })
  nmPemilik!: string | null;

  @Column("character", { name: "thn_kendaraan", nullable: true, length: 4 })
  thnKendaraan!: string | null;

  @Column("character", { name: "jns_kendaraan", nullable: true, length: 1 })
  jnsKendaraan!: string | null;

  @Column("character varying", {
    name: "merk_kendaraan",
    nullable: true,
    length: 30,
  })
  merkKendaraan!: string | null;
}
