import { Column, Entity, Index } from "typeorm";

@Index("pembatalan_sppt_jabatan_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnYgDibatalkan"], { unique: true })
@Entity("pembatalan_sppt_jabatan", { schema: "public" })
export class PembatalanSpptJabatan {
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

  @Column("character", { primary: true, name: "thn_yg_dibatalkan", length: 4 })
  thnYgDibatalkan!: string;

  @Column("character", { name: "thn_pembatalan", length: 4 })
  thnPembatalan!: string;

  @Column("character", { name: "jns_sk", length: 1 })
  jnsSk!: string;

  @Column("character", { name: "no_sk", length: 30 })
  noSk!: string;

  @Column("character varying", {
    name: "alasan_pembatalan",
    nullable: true,
    length: 30,
  })
  alasanPembatalan!: string | null;

  @Column("character", { name: "status_pembatalan", nullable: true, length: 1 })
  statusPembatalan!: string | null;

  @Column("character", { name: "nip_perekam", nullable: true, length: 18 })
  nipPerekam!: string | null;

  @Column("timestamp without time zone", { name: "tgl_rekam", nullable: true })
  tglRekam!: Date | null;
}
