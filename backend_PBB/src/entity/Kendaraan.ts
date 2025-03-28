import { Column, Entity, Index } from "typeorm";

@Index("bng_sin_kendaraan_fk", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], {})
@Index("jns_kendaraan_kendaraan_fk", ["kdKendaraan"], {})
@Index("kendaraan_pkey", ["noPolisi"], { unique: true })
@Entity("kendaraan", { schema: "public" })
export class Kendaraan {
  @Column("character", { primary: true, name: "no_polisi", length: 10 })
  noPolisi!: string;

  @Column("character", { name: "kd_kendaraan", nullable: true, length: 2 })
  kdKendaraan!: string | null;

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

  @Column("smallint", { name: "no_bng", nullable: true })
  noBng!: number | null;

  @Column("character varying", { name: "merk", nullable: true, length: 30 })
  merk!: string | null;

  @Column("character", { name: "tahun", nullable: true, length: 4 })
  tahun!: string | null;

  @Column("character varying", {
    name: "nama_pemilik",
    nullable: true,
    length: 30,
  })
  namaPemilik!: string | null;

  @Column("character", { name: "status_kendaraan", nullable: true, length: 1 })
  statusKendaraan!: string | null;
}
